const mongoose = require("mongoose");

const causesPaymentSchema = new mongoose.Schema(
    {
        cause: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Causes",
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        amount: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);


const CausesPayment = mongoose.model("CausesPayment", causesPaymentSchema);

module.exports = CausesPayment;
