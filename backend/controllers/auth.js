const Router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const {registerValidation, loginValidation} = require('../validation')

Router.post('/register', async(req, res) => {
  const validation = registerValidation(req.body)
  if (validation.error){
    return res.status(400).send(validation.error.details[0].message)
  }

  const emailExists = await User.findOne({email: req.body.email})
  if (emailExists) return res.json({
    "error": 'email already used!'
  }) // guard
  
  // Hash the pw
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword
  })

  newUser.save().then((data)=>{
    const token = jwt.sign({_id: data._id}, process.env.JWT_SECRET)
    res.json({
      "status": "success",
      "user": {
        email: req.body.email,
        _id: data._id,
        token: token,
        cart: []
      }
    })
  }).catch(err=> res.send(err))
})

Router.post('/login', async (req, res) => {
  const validation = loginValidation(req.body)
  if (validation.error){
    return res.status(400).send(validation.error.details[0].message)
  }

  const user = await User.findOne({email: req.body.email})
  if (!user) return res.status(400).json({
    "error": 'Wrong email'
  }) // guard

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).json({
    "error": "invalid password"
  })


  // create jwt
  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
  return res.header('auth-token', token).json({
    "status": "success",
    "user": {
      email: user.email,
      _id: user._id,
      token: token,
      cart: user.cart
    }
  })
})

module.exports = Router