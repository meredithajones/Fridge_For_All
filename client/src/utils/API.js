import axios from "axios";

//Is inventoryitems what we should be connecting to here?
export default {
//Post Inventory Items
saveItem: function(inventoryData) {
    return axios.post("/api/inventoryitems/" , inventoryData);
},
  //Gets All Inventory Items
  getInventoryData: function() {
    return axios.get("/api/inventoryitems");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/inventoryitems/"+ id);
  },

// Updates the item with the given id
updateItem: function(updatedInventoryData) {
  return axios.put("/api/inventoryitems/" , updatedInventoryData);
},

  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/inventoryitems/" + id);
  },
};