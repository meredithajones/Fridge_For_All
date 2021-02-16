import react from "react";
import axios from "axios";

export default {
  //Gets All Inventory Items
  getItems: function() {
    return axios.get("/");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("../backend/routes/inventoryitems" + id);
  },
};