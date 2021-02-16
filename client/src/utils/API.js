import axios from "axios";

export default {
  //Gets All Inventory Items
  getItems: function() {
    return axios.get("/inventoryitems");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/inventoryitems" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/inventoryitems" + id);
  },
};