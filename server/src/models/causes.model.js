const mongoose = require("mongoose");

const causesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageLink: {
            type: String
        },
        goalAmount: {
            type: Number,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);


const Causes = mongoose.model("Causes", causesSchema);

module.exports = Causes;
