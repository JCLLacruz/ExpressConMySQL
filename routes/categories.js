const express = require("express");
const CategoryController = require("../controllers/CategoryController.js");
const router = express.Router();

router.get('/', CategoryController.allCategories);
router.get('/:id', CategoryController.categoryById);
router.post('/', CategoryController.addCategory);
router.post('/productcategories', CategoryController.productCategories);
router.put('/update/:id', CategoryController.updateCategoryById);


module.exports = router;