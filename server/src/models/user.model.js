const mongoose = require("mongoose");
const { CONFIG_ROLES } = require("../../config");
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            enum: ["admin", "fundraiser"],
            required: true,
            default: "fundraiser"
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
