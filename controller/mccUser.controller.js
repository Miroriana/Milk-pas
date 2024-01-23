const MccUserModel = require("../models/mccUser.model");
const sendEmail = require("../utils/email");
const errorHandler = require("../errors/errorhandler");

const addMccUser = async (req, res, next) => {
  const { email, ...rest } = req.body;
  try {
    var mccUserExists = await MccUserModel.findOne({ email: req.body.email });
    if (mccUserExists) {
      return res
        .status(200)
        .json({ message: "MccUser with this email already exists" });
    } else {
      var addedMccUser = await MccUserModel.create(req.body);
      // sending email codes
      var senderEmail = addedMccUser.email;
      var subject = "Finished signing up your account";
      signUpLink = `<p> <h3>Hello Veterinary! </h3>Welcome to our Team!! Here are your credentials<br> User email: ${addedMccUser.email} <br> Password: ${addedMccUser.password}  </p> <a href="http://localhost:4000/api/UH/v1/user/auth/signup">Sign in to continue</a>`;
      sendEmail(senderEmail, subject, signUpLink);

      res.status(201).json({
        message: "mccUser is recorded successfully, email is sent to the mcc",
        veterian: addedMccUser,
      });
    }
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

// // remove mcc

const removeMccUser = async (req, res, next) => {
  const { email, ...rest } = req.body;
  try {
    var deletedMccUser = await MccUserModel.findByIdAndDelete(req.query.id);
    console.log(deletedMccUser);
    if (deletedMccUser) {
      res.status(200).json({
        message: "MccUser is Deleted",
      });
    } else {
      res.status(404).send("mccUser is not found!");
    }
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

//finding the mcc by id
const findMccUserById = async (req, res, next) => {
  var MccUser = await MccUserModel.findById(req.query.id);
  try {
    if (MccUser === null) {
      return next(errorHandler(400, "No mccUser with given ID"));
    }
    res.json({
      message: "mccUser is found",
      MccUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
//listing all the mccUser recorded
const listOfMccUser = async (req, res, next) => {
  var MccUserList = await MccUserModel.find();
  try {
    res.json({
      message: "this is the MccUser list",
      MccUserList,
    });
  } catch (error) {
    next(errorHandler(500, "There is no MccUsers in the database"));
  }
};
//updating a Mcc's information according to his email
const updateMccUser = async (req, res, next) => {
  try {
    var updatedMccUser = await MccUserModel.findByIdAndUpdate(
      { _id: req.query.id },
      req.body
    );
    if (updatedMccUser === null) {
      res.status(200).json({ message: "the mccUSer not found" });
    }
    res.status(200).json({
      message: "The updated mccUser became",
      updatedMccUser,
    });
  } catch (error) {
    res.status(500).send("mccEmployee can't be updated");
  }
};

module.exports = {
  addMccUser,
  removeMccUser,
  findMccUserById,
  listOfMccUser,
  updateMccUser,
};
