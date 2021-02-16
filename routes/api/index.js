const router = require("express").Router();
const inventoryRoutes = require("./inventoryitems");

// Inventory routes
router.use("/inventoryitems", inventoryRoutes);
module.exports = router;