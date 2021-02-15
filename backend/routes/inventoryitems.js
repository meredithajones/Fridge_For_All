const router = require('express').Router();
const { default: inventory } = require('../../client/src/components/Inventory/Inventory');
let Inventory = require('../models/inventory.model');

router.route('/').get((req, res) => {
  Inventory.find()
    .then(inventory => res.json(inventory))
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