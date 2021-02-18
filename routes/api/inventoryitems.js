const router = require('express').Router();
const InventoryController = require ("../../controllers/InventoryControllers") 

// Inventory Model
const Inventory = require('../../models/Inventorymodel');

//route GET api/inventory
router.route('/')
.get(InventoryController.findAll)
.post(InventoryController.create)
.put(InventoryController.update)

//POST api/inventory
router
.route('/:id')
  .get(InventoryController.findById)
  
  .delete(InventoryController.remove);

 


module.exports = router;