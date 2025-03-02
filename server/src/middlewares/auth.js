const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { CONFIG_JWT } = require("../../config");

const validateToken = (roles) => {
  // console.log(roles);
  return async (req, res, next) => {
    try {
      let token = req.header("Authorization");
      if (!token) {
        throw new Error("No Token Provided");
      }
      token = token.replace("Bearer ", "");
      const decoded = jwt.verify(token, CONFIG_JWT.secret);
      if (!decoded) {
        throw new Error("Unauthorized - Invalid Token");
      }
      console.log(decoded);
      const user = await User.findOne({
        _id: decoded._id,
      });
      if (!user) {
        throw new Error("User not found");
      }
      if (!roles.includes(user.role)) {
        throw new Error("Unauthorized - Insufficient Role");
      }
      req.token = token;
      req.user = user;
      next();
    } catch (e) {
      res.status(401).send({ error: e.message });
    }
  };
};

const auth = {
  validateToken,
};
module.exports = auth;
