const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema 
const inventorySchema = new Schema({
    inventoryname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
date: {
  type: Date, 
  default: Date.now
},

quantity: {
  type: Number, required: true,

}
});

const InventoryData = mongoose.model('inventory', inventorySchema);

module.exports = InventoryData;