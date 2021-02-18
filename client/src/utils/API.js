import axios from "axios";

export default {

  //Gets All Inventory Items
  getItems: function() {
    return axios.get("api/inventoryitems");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("api/inventoryitems/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("api/inventoryitems/" + id);
  },
  //Post Inventory Items
saveItem: function(inventoryData) {
  return axios.post("api/inventoryitems/" + inventoryData);
},
};