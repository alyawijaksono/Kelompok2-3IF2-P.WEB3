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
const userRouter = require('./routes/user');
//const helpRouter = require('./routes/help');

const Book = require('./models/book');
const Head_Order = require('./models/head_order');
const Detail_Order = require('./models/detail_order');
const User = require('./models/user');

/* associations */
Head_Order.belongsTo(User);
Detail_Order.belongsTo(Book);
Head_Order.hasMany(Detail_Order);

app.use(homeRouter);
app.use('/book', bookRouter);
app.use('/order', orderRouter);
app.use('/user', userRouter);
//app.use('/help', helpRouter);
//app.use('/user', userRouter);

app.listen(3202, () => {
    console.log('server started');
    sequelize.sync();
})