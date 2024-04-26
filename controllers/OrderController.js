const db = require('../config/database.js');

const OrderController = {
    addOrder (req,res) {
        let sql = `INSERT INTO myeshop.orders (user_id) values
        (${req.body.user_id});`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(201).send({msg: `Order added:`, order: req.body});
        })
    },
    orderProducts (req, res) {
        let sql = `INSERT INTO myeshop.orderproducts (order_id, product_id) values (${req.body.order_id}, ${req.body.product_id});`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(201).send({msg: `Order id: ${req.body.order_id} Product id: ${req.body.product_id}`});
        })
    },
    allOrders (req, res) {
        let sql = `SELECT * FROM myeshop.orders;`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send({msg: `All Orders`,orders:result});
        })
    },
}

module.exports = OrderController;