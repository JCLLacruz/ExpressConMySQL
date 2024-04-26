const db = require('../config/database.js');

const CategoryController = {
    addCategory (req,res) {
        let sql = `INSERT INTO myeshop.categories (name_category, _description) values
        ('${req.body.name_category}', '${req.body._description}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(201).send({msg: `Category added:`,category: req.body});
        })
    },
    productCategories (req, res) {
        let sql = `INSERT INTO myeshop.productcategories (product_id, category_id) values
        ('${req.body.product_id}', '${req.body.category_id}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(201).send({msg: `Product id: ${req.body.product_id} Category id: ${req.body.category_id}`});
        })
    },
    updateCategoryById(req, res) {
		let sql = `UPDATE myeshop.categories SET name_category = '${req.body.name_category}', _description ='${req.body._description}' WHERE id = ${req.params.id};`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `Category updated:`, product: req.body });
		});
	},
    allCategories(req, res) {
		let sql = `SELECT * FROM categories;`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `All categories`, result});
		});
	},
    categoryById(req, res) {
		let sql = `SELECT * FROM myeshop.categories WHERE id = ${req.params.id};`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `All categories`, result});
		});
	},
};

module.exports = CategoryController;