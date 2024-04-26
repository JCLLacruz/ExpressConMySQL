const db = require('../config/database.js');

const ProductController = {
	addProduct(req, res) {
		let sql = `INSERT INTO myeshop.products (name_product, price) values
        ('${req.body.name_product}', ${req.body.price});`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.status(201).send({ msg: `Product added:`, product: req.body });
		});
	},
	updateProductById(req, res) {
		let sql = `UPDATE myeshop.products SET name_product = '${req.body.name_product}', price ='${req.body.price}' WHERE id = ${req.params.id};`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `Product updated:`, product: req.body });
		});
	},
    allProducts(req, res) {
		let sql = `SELECT * FROM products;`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `All products`, result});
		});
	},
    allProductsDesc(req, res) {
		let sql = `SELECT * FROM products ORDER BY price DESC;`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `Products ordered in descending order.`, result});
		});
	},
    allProductsAndCategory(req, res) {
		let sql = `SELECT name_product, name_category FROM myeshop.productcategories 
        INNER JOIN myeshop.categories ON categories.id = productcategories.category_id
        INNER JOIN myeshop.products ON products.id = productcategories.product_id;`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `All products with category`, result});
		});
	},
    productById(req, res) {
		let sql = `SELECT * FROM myeshop.products WHERE id = ${req.params.id}`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `Product with id: ${req.params.id}`, result});
		});
	},
    productByName(req, res) {
		let sql = `SELECT * FROM myeshop.products WHERE name_product = '${req.query.name}'`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `Product with name: ${req.query.name}`, result});
		});
	},
    deleteProductById(req, res) {
		let sql = `DELETE FROM myeshop.products WHERE id = ${req.params.id}`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `Product deleted`});
		});
	},
};

module.exports = ProductController;
