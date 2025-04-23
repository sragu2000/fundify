const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { CONFIG_JWT } = require("../../config");
const AppError = require("../configurations/AppError");


const registerUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return next(new AppError("Required parameters missing", 400));
        }
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return next(new AppError("User already exists", 400));
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const userDataCount = await User.countDocuments();
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            role: userDataCount === 0 ? "admin" : "donor",
        };
        const user = await User.create(data);
        return res.status(201).json(
            res.handler.setMessage("User registered").setData(user)
        );
        // return res.status(201).json(
        //     new ResponseHandler().setMessage("Registration Success").setData(user)
        // );
    } catch (error) {
        next(error)
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email)
        console.log(password)

        if (!email || !password) {
            return next(new AppError("Required parameters missing", 400));
        }
        const user = await User.findOne({ email: email });
        
        if (!user) {
            return next(new AppError("User not found", 404));
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid E-Mail or Password" });
        }
        const token = jwt.sign(
            {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            },
            CONFIG_JWT.secret,
            {
                expiresIn: CONFIG_JWT.expire,
            }
        );
        return res.status(200).json(
            res.handler.setMessage("Login Success").setData({
                token: token
            })
        );
    } catch (error) {
        next(error)
    }
};


module.exports = {
    registerUser,
    loginUser,
};
