const express = require('express');
const { addMccUser, removeMccUser, findMccUserById, listOfMccUser, updateMccUser } = require('../controller/mccUser.controller');

const mccUserRouter = express.Router();

mccUserRouter.post('/addMccUser', addMccUser);
mccUserRouter.delete('/removeMccUser',removeMccUser);
mccUserRouter.get('/findMccUser', findMccUserById);
mccUserRouter.get('/allMccUser', listOfMccUser);
mccUserRouter.patch('/updateMccUser', updateMccUser);

module.exports = mccUserRouter;