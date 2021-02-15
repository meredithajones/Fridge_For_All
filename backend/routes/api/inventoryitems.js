const router = require('express').Router();
const { default: inventory } = require('../../../client/src/components/Inventory/Inventory');

//Inventory Model
const Inventory = require('../../models/Inventory.model');

//route GET api/inventory
router.route('/').get((req, res) => {
  Inventory.find()
    .then(inventory => res.json(inventory))
    // .sort() can be used with quantity?
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const inventoryname = req.body.inventoryname;
  //username

  const newInventory = new Inventory({inventoryname});

  newInventory.save()
    .then(() => res.json('Inventory added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;