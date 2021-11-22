const Mongoose = require("mongoose")

const userSchema = new Mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    passwordHash: {
        type: String,
        required: true,
    },
})

const User = Mongoose.model("user", userSchema);

module.exports = User;