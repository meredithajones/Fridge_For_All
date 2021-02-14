const Mongoose = require("mongoose")

const customerSchema = new Mongoose.Schema({

    name: {
        type: String,
        required: true
    },


})

const Customer = Mongoose.model("customer", customerSchema);

module.exports = Customer;