const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema 
const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },

quantity: {
  type: Number

}
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;