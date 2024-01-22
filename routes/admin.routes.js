const express = require('express');
const { addVeterian, removeVeterinary, findVeterinaryById, listOfVeterinary, updateVeterinary } = require('../controller/admin.controller');

const adminRouter = express.Router();

adminRouter.post('/addVet', addVeterian);
adminRouter.delete('/removeVet',removeVeterinary);
adminRouter.get('/findVet', findVeterinaryById);
adminRouter.get('/allVets', listOfVeterinary);
adminRouter.patch('/updateVet', updateVeterinary);

module.exports = adminRouter;