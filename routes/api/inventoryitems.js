const router = require('express').Router();
const InventoryController = require ("../../controllers/InventoryControllers") 

// Inventory Model
const Inventory = require('../../models/Inventorymodel');

//route GET api/inventory
router.route('/')
.get(InventoryController.findAll)
.post(InventoryController.create)

//POST api/inventory
router.route('/:id')
  .get(InventoryController.findById)
  .put(InventoryController.update)
  .delete(InventoryController.remove);
// router.route('/:id').post((req, res) => {
//   const inventoryname = req.body.inventoryname;
  
 
//   const newInventory = new Inventory({inventoryname});

//   //Save new inventory to the database
//   newInventory.save()
//     .then(() => res.json('Inventory added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// //DELETE api/inventoryitems/:id
// router.delete('/:id', (req, res)=> {
//   Inventory.findById(req.params.id)
//   .then(inventory => item.remove().then(() => res.json({success: true})))
//   .catch(err => res.status(404).json({ delete: false}));
// });

module.exports = router;