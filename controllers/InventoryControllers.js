const db = require("../models");


//Setting up methods for the Inventory controller
module.exports = {
findAll: function(req, res) {
    db.Inventory
    .find(req.query)
    .sort({ quantity: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findById: function(req, res) {
    console.log (req.params.id)
    db.Inventory
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

create: function(req, res) {
    console.log(req.body)
    db.Inventory
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

},

update: function(req, res) {
    console.log(req.body)
    db.Inventory
    .findOneAndUpdate({ _id: req.body._id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

remove: function(req, res) {
    db.Inventory
    .findById(req.params.id)
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    }
};