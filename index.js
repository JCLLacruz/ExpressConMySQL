const express = require('express');
const app = express();
const db = require('./config/database.js');
const PORT = 3000;

app.use(express.json());

app.use('/products', require('./routes/products.js'));
app.use('/categories', require('./routes/categories.js'));
app.use('/users', require('./routes/users.js'));
app.use('/orders', require('./routes/orders.js'));

app.get('/createdb/:databasename', (req, res) => {
	let sql = `CREATE DATABASE ${req.params.databasename};`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send('Database created...');
	});
});

app.get('/createtable/products', (req, res) => {
	let sql = `CREATE TABLE products (
        id INT AUTO_INCREMENT,
        name_product VARCHAR(50),
        price INT,
        PRIMARY KEY(id)
        );`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send('Table created...');
	});
});

app.get('/createtable/categories', (req, res) => {
	let sql = `CREATE TABLE categories(
        id INT AUTO_INCREMENT,
        name_category VARCHAR(50),
        _description VARCHAR(50),
        PRIMARY KEY(id)
        );`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send('Table created...');
	});
});

app.get('/createtable/users', (req, res) => {
	let sql = `CREATE TABLE myeshop.users(id INT AUTO_INCREMENT, first_name VARCHAR(50), last_name VARCHAR(50), phone INT, PRIMARY KEY(id));`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send('Table created...');
	});
});

app.get('/createtable/orders', (req, res) => {
	let sql = `CREATE TABLE myeshop.orders(id INT AUTO_INCREMENT, date date, user_id INT, PRIMARY KEY(id), FOREIGN KEY(user_id) REFERENCES myeshop.users(id));`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send('Table created...');
	});
});

app.get('/createtable/orderproducts', (req, res) => {
	let sql = `CREATE TABLE myeshop.orderproducts(id INT AUTO_INCREMENT, order_id INT, product_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES myeshop.products(id) ON DELETE CASCADE, FOREIGN KEY(order_id) REFERENCES myeshop.orders(id));`;
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send('Table created...');
	});
});

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
