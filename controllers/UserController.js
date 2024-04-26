const db = require('../config/database.js');

const UserController = {
	addUser(req, res) {
		let sql = `INSERT INTO myeshop.users (first_name, last_name, phone) values
        ('${req.body.first_name}', '${req.body.last_name}', ${req.body.phone});`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.status(201).send({ msg: `User added:`, user: req.body});
		});
	},
    updateUsertById(req, res) {
		let sql = `UPDATE myeshop.users SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}', phone = ${req.body.phone} WHERE id = ${req.params.id};`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `User updated:`, product: req.body });
		});
	},
    allUsers(req, res) {
		let sql = `SELECT * FROM users;`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `All users`, result});
		});
	},
    userById(req, res) {
		let sql = `SELECT * FROM myeshop.users WHERE id = ${req.params.id}`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `User with id: ${req.params.id}`, result});
		});
	},
    allOrdersAndUsers(req, res) {
		let sql = `SELECT * FROM myeshop.users INNER JOIN myeshop.orders ON users.id = orders.user_id;`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `All orders with user`, result});
		});
	},
    deleteUserById(req, res) {
		let sql = `DELETE FROM myeshop.users WHERE id = ${req.params.id}`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send({ msg: `User deleted`});
		});
	},
};

module.exports = UserController;