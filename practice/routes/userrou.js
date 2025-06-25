const express = require('express').Router();

const{createUser} = require('../controllers/usercon');
const { updateduser, deleteuser } = require('../controllers/usercon');
express.post('/users', createUser);
express.put('/updateusers/:id', updateduser);
express.delete('/deleteusers/:id', deleteuser);

module.exports = express;