const express = require('express');
const router = express.Router();
const User = require('../models/users');

//-------Create "post" New User
router.post('/create', (req, resp)=>{
    let newUser = req.body;
    User.create(newUser, (err, data)=>{
      err ? resp.status(400).send(err) : resp.status(201).send(data)
    })
})

//-------Get "get" New User
router.get('/getAll',(req,resp)=>{
    User.find({},(err,data)=>{
      if(!err){
         resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

//-------Get "get" user by email
router.get('/:email/get',(req,resp)=>{
    User.find({email:req.params.email},(err,data)=>{
      if(!err){
        if(data.length == 0) resp.status(200).send("User E-Mail is not correct!!") 
        else resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

//-------Delete "delete" user by email
router.delete('/:email/delete',(req,resp)=>{
    User.deleteOne({email:req.params.email},(err,data)=>{
      if(!err){
        if(data.deletedCount == 0)  resp.status(200).send("No User Register with that mail!")
        else resp.status(200).send(data)
      }else resp.status(400).send(err)
    })
})

//-------Update "put" user by Email
router.put('/:email/update',(req,resp) => {
    var user = req.body
    User.updateOne({email:req.params.email},user,(err,data) => {
       if(!err){
        if (data.nModified == 0) resp.status(200).send("User E-Mail is not correct!!") 
        else resp.status(200).send(data)
       }else resp.status(400).send(err)
    })
})

module.exports = router;