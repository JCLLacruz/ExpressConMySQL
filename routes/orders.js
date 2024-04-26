const express = require("express");
const OrderController = require("../controllers/OrderController.js");
const router = express.Router();

router.get('/', OrderController.allOrders);
router.post('/', OrderController.addOrder);
router.post('/orderproducts/', OrderController.orderProducts);


module.exports = router;