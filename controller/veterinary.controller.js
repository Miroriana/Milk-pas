//registering the mcc
// const { UserSigninSchema } = require("../utils/validation");
const errorHandler = require("../errors/errorhandler");
const MccModel = require("../models/veterian.model");

const addMcc = async (req, res, next) => {
  const {fullName, ...rest} = req.body;
  try {
    var mccExists = await MccModel.findOne({ fullName: req.body.fullName });
    if (mccExists){
      return res
        .status(200)
        .json({ message: "mcc with this name already exists" });
    }
    else {
      var addedMcc = await MccModel.create(req.body);
      res.status(201).json({
        message: "mcc is recorded successfully",
        mcc: addedMcc
      });
    }
  } catch (error) {
    next(errorHandler(500, error.message));
  }};
  const removeMcc = async(req,res,next) =>{
    const {email, ...rest} = req.body;
    try {
        var deletedMcc = await MccModel.findByIdAndDelete(req.query.id);
        console.log(deletedMcc);
        if(deletedMcc){
            res.status(200).json({
                message:"Mcc is Deleted",
            });
        }else{
          res.status(404).send('Mcc not found!');
        }
    } catch (error) {
        next(errorHandler(500, error.message));
    }
  }
  const updateMcc = async (req,res,next) =>{
    try {
      var updateMcc = await MccModel.findByIdAndUpdate({_id:req.query.id}, req.body);
      res.status(200).json({
          message:"The updated Mcc became",
          updateMcc
      });
  } catch (error) {
      res.status(500).send("can't be deleted");
  }
  }
  const findMcc = async (req,res,next) =>{
      var mcc = await MccModel.findById(req.query.id);
      try {
        if(mcc === null){
          return next(errorHandler(400,"Mcc with given ID"));
        }
        res.json({
          message: "mcc is found",
          mcc,
        });
      } catch (error) {
        res.status(500).send(error);
      }
  }
  const listMcc = async (req, res, next) =>{
    var mccList = await MccModel.find();
    try {
      if(mccList === null){
        return next(errorHandler(400,"No mcc with given ID"));
      }
      res.json({
        message: "this is the mcc list",
        mccList,
      });
    } catch (error) {
      res.status(500).send("you don't have any mcc in the list");
    }
  }
  module.exports = {addMcc, removeMcc, updateMcc, findMcc, listMcc};