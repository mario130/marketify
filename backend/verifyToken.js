const jwt = require('jsonwebtoken');

module.exports = function authenticate(req, res,next){

  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied')

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verified // verified is the payload (_id)
  } catch (error) {
    res.status(400).send('Invalid token')
  }
  
  next()
}