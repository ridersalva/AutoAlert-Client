const mongoose = require('mongoose')
const { Schema, model } = require("mongoose");

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,

    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN']
    },
},

    {
        timestamps: true,
    }
)
const User = model("User", userSchema);

module.exports = User;
