const express = require("express");
const ProductController = require("../controllers/ProductController.js");
const router = express.Router();

router.get('/', ProductController.allProducts);
router.get('/productsandcategories', ProductController.allProductsAndCategory);
router.get('/productspricedesc', ProductController.allProductsDesc);
router.get('/search/id/:id', ProductController.productById);
router.get('/search/name', ProductController.productByName);
router.post('/', ProductController.addProduct);
router.put('/update/:id', ProductController.updateProductById);
router.delete('/delete/:id', ProductController.deleteProductById);

module.exports = router;