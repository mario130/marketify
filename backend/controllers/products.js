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

Router.delete('/:id/delete', (req, res) => {
  Product.deleteOne({_id: req.params.id}, (err, data) => {
    if (!err){
      if (data.deletedCount === 0){
        res.status(200).send('User not found')
      } else {
        res.status(200).send(data)
      }
    } else {
      res.status(400).send(err)
    }
  })
})

Router.put('/:id/update', (req, res) => {
  Product.updateOne({_id: req.params.id}, {
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
    price: req.body.price,
    variations: req.body.variations,
    rating: req.body.rating,
    description: req.body.description,
    features: req.body.features,
  }).then((data, err) => {
      if (!err) {
        if(data === null){
          return res.status(200).send('Not found')
        }
        return res.status(200).send(data)
      } else {
        res.status(400).send(err)
      }
  })
})


module.exports = Router;