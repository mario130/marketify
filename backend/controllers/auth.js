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
  if (emailExists) return res.send('email already used!') // guard
  
  // Hash the pw
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword
  })

  newUser.save().then((data)=>res.send({newUserId: data._id})).catch(err=> res.send(err))
})

Router.post('/login', async (req, res) => {
  const validation = loginValidation(req.body)
  if (validation.error){
    return res.status(400).send(validation.error.details[0].message)
  }

  const user = await User.findOne({email: req.body.email})
  if (!user) return res.send('Wrong email') // guard

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Invalid password')


  // create jwt
  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
  res.header('auth-token', token).send('Logged in! check the auth-token in headers')
})

module.exports = Router