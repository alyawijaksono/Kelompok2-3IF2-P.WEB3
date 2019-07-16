const express = require('express');
const bodyParser = require ('body-parser')
const sequelize = require('./configs/sequelize');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

const homeRouter = require('./routes/home');
const bookRouter = require('./routes/book');
const orderRouter = require('./routes/order');
const helpRouter = require('./routes/help');

const Book = require('./models/book');
const User = require('./models/user');
const Head_Order = require('./models/head_order');
const Detail_Order = require('./models/detail_order');

/* associations */
Head_Order.belongsTo(User);
Detail_Order.belongsTo(Book);
Detail_Order.hasMany(Head_Order);

app.use(homeRouter);
app.use('/book', bookRouter);
app.use('/order', orderRouter);
app.use('/help', helpRouter);

app.listen(3202, () => {
    console.log('server started');
    sequelize.sync();
})