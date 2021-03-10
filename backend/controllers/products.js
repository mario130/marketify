const express = require('express');
const Router = express.Router();
const Product = require('../models/products');

Router.post('/create', (req, res)=>{
  let newProduct = req.body;
  Product.create(newProduct, (err, data)=>{
    err ? res.status(400).send(err) : res.status(201).send(data)
  })
})

Router.get('/:id?', (req, res)=>{ // (:) means it's dynamic - (?) means it might not be there
  if (req.params.id){ // get one product
    Product.findOne({_id: req.params.id}, (err, data)=>{
      if(err){
        res.status(400).send(err)
      } else {
        if (data === null){ // a response came back empty (no error)
          return res.send('Not found')
        }
        return res.status(200).send(data)
      }
    })
  } else { // get all products
    Product.find({}, (err, data)=>{
      if (err) {
        res.status(400).send(err)
      } else {
        if (data === null){
          return res.send('No products yet')
        }
        return res.status(200).send(data)
      }
    })
  }
})

// TODO: add PUT method for updates
// TODO: add DELETE method

module.exports = Router;