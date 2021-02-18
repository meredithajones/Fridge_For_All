const router = require('express').Router();
const InventoryController = require ("../../controllers/InventoryControllers") 

// Inventory Model
const Inventory = require('../../models/Inventorymodel');

//route GET api/inventory
router.route('/')
.get(InventoryController.findAll)
.post(InventoryController.create)

//POST api/inventory
router
.route('/:id')
  .get(InventoryController.findById)
  .put(InventoryController.update)
  .delete(InventoryController.remove);

 


module.exports = router;