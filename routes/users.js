const express = require("express");
const UserController = require("../controllers/UserController.js");
const router = express.Router();

router.get('/', UserController.allUsers);
router.get('/ordersandusers', UserController.allOrdersAndUsers);
router.get('/search/id/:id', UserController.userById);
router.post('/', UserController.addUser);
router.put('/update/:id', UserController.updateUsertById);
router.delete('/delete/:id', UserController.deleteUserById);

module.exports = router;