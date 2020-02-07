require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT,CONNECTION_STRING} = process.env;
const app = express();
app.use(express.json());

const {getAll, getOne, update, create, deleted} = require('./controller/productCTR')

massive(CONNECTION_STRING).then( dbInstance => {
    app.set('db',dbInstance);
    // console.log('connected db')
}).catch(err => console.log(err));


app.get(`/api/products`, getAll);

app.get(`/api/products/:id`, getOne);

app.put(`/api/products/:id`, update);

app.post(`/api/products`, create);

app.delete(`/api/products/:id`, deleted)


app.listen(SERVER_PORT,() => console.log(`live on port${SERVER_PORT}`))