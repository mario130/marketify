const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRoutes = require('./controllers/products');
const usersRoutes=require('./controllers/users');

const app = express()
const PORT = 4001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://mario:H70GQjtWuTvrb01Z@cluster0.4o2yk.mongodb.net/marketify?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to mongodb!'))
.catch(()=> console.log('Could\'nt connect ro mongodb!'));

app.use('/api/products', productsRoutes)
app.use('/api/users', usersRoutes)

app.listen(PORT, ()=>console.log(`Now listening on port ${PORT}`))