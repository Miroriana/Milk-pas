const express = require('express');
const { addFarmer, removeFarmer, findFarmerById, listOfFarmer, updateFarmer } = require('../controller/farmer.controller');
const farmerRoute = express.Router();

farmerRoute.post('/addFarmer', addFarmer);
farmerRoute.delete('/deleteFarmer', removeFarmer);
farmerRoute.get('/findFarmer', findFarmerById);
farmerRoute.get('/allFarmers', listOfFarmer);
farmerRoute.patch('/updateFarmers', updateFarmer);


module.exports = farmerRoute;