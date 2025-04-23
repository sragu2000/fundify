const AppError = require("../configurations/AppError");
const Causes = require("../models/causes.model");
const causeValidations = require("../validations/cause.validation");

const createCause = async (req, res, next) => {
    try {
        const validationResult = await causeValidations.createCauseValidation(req.body);
        if (validationResult.status === false) {
            return next(new AppError("Required Parameters Missing", 400, validationResult?.errors));
        }

        let data = {};
        data["title"] = req.body.title;
        data["description"] = req.body.description;
        data["imageLink"] = req.body.imageLink;
        data["goalAmount"] = req.body.goalAmount;
        data["createdBy"] = req?.user?._id || null;

        const cause = await Causes.create(data);

        return res.status(201).json(
            res.handler.setMessage("Cause Created").setData(cause)
        );

    } catch (error) {
        next(error)
    }
};

const getCauseById = async (req, res, next) => {
    try {
        const validationResult = await causeValidations.deleteCauseValidation(req.params);
        if (validationResult.status === false) {
            return next(new AppError("Required Parameters Missing", 400, validationResult?.errors));
        }

        let currentCause = await Causes.findById(req.params.causeId).populate("createdBy", "firstName lastName _id")
        if (!currentCause) {
            return next(new AppError("Cause not found", 400));
        }

        return res.status(200).json(
            res.handler.setMessage("Cause deleted").setData(currentCause)
        );

    } catch (error) {
        next(error)
    }
}

const getAllCauses = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 5;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * limit;
        const count = await Causes.countDocuments();
        const data = await Causes.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        const responseData = {
            totalCount: count,
            limit: limit,
            pageNumber: page,
            totalPages: Math.ceil(count / limit),
            data: data,
        };
        return res.status(200).json(
            res.handler.setData(responseData)
        );
    } catch (error) {
        next(error)
    }
};


const updateCause = async (req, res, next) => {
    try {
        const validationResult = await causeValidations.updateCauseValidation(req.body);
        if (validationResult.status === false) {
            return next(new AppError("Required Parameters Missing", 400, validationResult?.errors));
        }

        let currentCause = await Causes.findById(req.body.causeId);
        if (!currentCause) {
            return next(new AppError("Cause not found", 400));
        }

        currentCause.title = req.body.title;
        currentCause.description = req.body.description;
        currentCause.imageLink = req.body.imageLink;
        currentCause.goalAmount = req.body.goalAmount;

        const cause = await currentCause.save();

        return res.status(200).json(
            res.handler.setMessage("Cause updated").setData(cause)
        );

    } catch (error) {
        next(error)
    }
};

const deleteCause = async (req, res, next) => {
    try {
        const validationResult = await causeValidations.deleteCauseValidation(req.body);
        if (validationResult.status === false) {
            return next(new AppError("Required Parameters Missing", 400, validationResult?.errors));
        }

        let currentCause = await Causes.findById(req.body.causeId);
        if (!currentCause) {
            return next(new AppError("Cause not found", 400));
        }
        const cause = await Causes.findByIdAndDelete(req.body.causeId);

        return res.status(200).json(
            res.handler.setMessage("Cause deleted").setData(cause)
        );

    } catch (error) {
        next(error)
    }
};


module.exports = {
    createCause, updateCause, deleteCause, getCauseById, getAllCauses
};
