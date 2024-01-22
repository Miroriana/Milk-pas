const FarmerModel = require("../models/farmer.model");
const express = require("express");
const { errorHandler } = require("../errors/errorhandler");

//add farmer for the first time
const addFarmer = async (req, res, next) => {
  const { email } = req.body;
  try {
    var farmerExists = await FarmerModel.findOne({ email: email });
    if (farmerExists)
      return res.status(200).json({message: "Farmer with this email already exists"});
    else {
      var addedFarmer = await FarmerModel.create(req.body);
      // const newFarmer = new FarmerModel(req.body);
      // var addedFarmer = newFarmer.save();
      res.status(201).json({
        message: "Farmer recorded successfully",
        farmer: addedFarmer,
      });
      // console.log(res);
    }
  } catch (error) {
    res.status(500).send("Failed to save the farmer ...");
  }
};
// removing a recorded farmer
const removeFarmer = async (req, res, next) => {
try {
    var deletedFarmer = await FarmerModel.findByIdAndDelete(req.query.id);
    if(deletedFarmer){
        res.status(200).json({
            message:"Farmer is Deleted"
        });
    }else{
        res.status(404).send('Farmer not found!');;
    }
} catch (error) {
    res.status(500).send(error);
}
};
//finding the farmer by id
const findFarmerById = async (req, res, next) => {
  var farmerTBF = await FarmerModel.findById(req.query.id);
  try {
    if(farmerTBF === null){
      res.json({message:"the farmer was deleted"});
    }
    res.json({
      message: "farmer is found",
      farmerTBF,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
//listing or the farmers recorded
const listOfFarmer = async (req, res, next) => {
  var farmerList = await FarmerModel.find();
  try {
    res.json({
      message: "this is the farmer list",
      farmerList,
    });
  } catch (error) {
    res.status(500).send("you don't have any farmer in the list");
  }
};
//updating a farmer's information according to his email
const updateFarmer = async(req,res,next) =>{

    try {
        var updatedFarmer = await FarmerModel.findOneAndUpdate({_id:req.query.id}, req.body);
        var farmer = await FarmerModel.find(updatedFarmer._id);
        res.status(200).json({
            message:"The updated farmer became",
            farmer
        });
    } catch (error) {
        res.status(500).send("can't be deleted");
    }
}

module.exports = { listOfFarmer, findFarmerById, removeFarmer, addFarmer, updateFarmer };
