const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const PORT = 4001
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, ()=>console.log(`Now listening on port ${PORT}`))