const { default: mongoose } = require("mongoose");


const createCauseValidation = async (body) => {
    const errors = [];

    if (!body.title) {
        errors.push("Title is required")
    }

    if (!body.description) {
        errors.push("Description is required")
    }

    if (!body.imageLink) {
        errors.push("Image Link is required")
    }

    if (!body.goalAmount) {
        errors.push("Goal Amount is required")
    } else if (isNaN(body.goalAmount)) {
        errors.push("Goal Amount must be a number")
    }

    return errors.length > 0 ? { status: false, errors: errors } : { status: true }
}


const updateCauseValidation = async (body) => {
    const errors = [];

    if (!body.causeId) {
        errors.push("causeId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(body.causeId)) {
        errors.push("Invalid causeId")
    }

    if (!body.title) {
        errors.push("Title is required")
    }

    if (!body.description) {
        errors.push("Description is required")
    }

    if (!body.imageLink) {
        errors.push("Image Link is required")
    }

    if (!body.goalAmount) {
        errors.push("Goal Amount is required")
    } else if (isNaN(body.goalAmount)) {
        errors.push("Goal Amount must be a number")
    }

    return errors.length > 0 ? { status: false, errors: errors } : { status: true }
}


const deleteCauseValidation = async (body) => {
    const errors = [];

    if (!body.causeId) {
        errors.push("causeId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(body.causeId)) {
        errors.push("Invalid causeId")
    }

    return errors.length > 0 ? { status: false, errors: errors } : { status: true }
}


module.exports = {
    createCauseValidation, updateCauseValidation, deleteCauseValidation
};
