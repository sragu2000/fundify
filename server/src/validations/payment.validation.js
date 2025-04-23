const { default: mongoose } = require("mongoose");

const getPaymentValidation = async (body) => {
    const errors = [];

    if (!body.causeId) {
        errors.push("causeId is required")
    }
    if (!mongoose.Types.ObjectId.isValid(body.causeId)) {
        errors.push("Invalid causeId")
    }

    if (!body.amount) {
        errors.push("Amount is required")
    } else if (isNaN(body.amount)) {
        errors.push("Amount must be a number")
    }

    if (!body.firstName) {
        errors.push("First Name is required")
    }

    if (!body.lastName) {
        errors.push("Last Name is required")
    }

    if (!body.email) {
        errors.push("Email is required")
    }

    return errors.length > 0 ? { status: false, errors: errors } : { status: true }
}



module.exports = {
    getPaymentValidation
};
