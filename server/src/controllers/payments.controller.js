const AppError = require("../configurations/AppError");
const Causes = require("../models/causes.model");
const CausesPayment = require("../models/causesPayments.model");
const User = require("../models/user.model");
const paymentValidations = require("../validations/payment.validation");

const getPayment = async (req, res, next) => {
    try {
        const validationResult = await paymentValidations.getPaymentValidation(req.body);
        if (validationResult.status === false) {
            return next(new AppError("Required Parameters Missing", 400, validationResult?.errors));
        }

        // Check if causeId is valid
        let currentCause = await Causes.findById(req.body.causeId);
        if (!currentCause) {
            return next(new AppError("Cause not found", 400));
        }

        // 1. save user to database
        let userDocument = await User.findOne({ email: req.body.email });

        if (!userDocument) {
            userDocument = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                role: "donor",
                status: "inactive",
            });
        }

        // 2. save payment to database
        let paymentData = {
            cause: req.body.causeId,
            amount: req.body.amount,
            user: userDocument._id,
        };

        const cause = await CausesPayment.create(paymentData);

        return res.status(201).json(
            res.handler.setMessage("Payment Saved").setData(cause)
        );

    } catch (error) {
        next(error)
    }
};



module.exports = {
    getPayment
};
