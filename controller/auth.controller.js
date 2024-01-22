const {UserModel,VeterinaryModel,MccModel} = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const errorHandler = require('../errors/errorhandler');
const asyncWrapper = require('../middlewares/async');
const { userAccountSignUpValidationSchema, userAccountSignInValidationSchema } = require('../utils/validations/validateUserAccount');
const CustomError = require('../errors');
const { default: statusCodes } = require('http-status-codes');
const { v4: uuidv4 } = require('uuid');
const sendEmail = require('../utils/email');


//sign up admin

const SignUp = async (req, res, next) =>{
    const { fullName, email, password, role, phoneNumber,confirmPassword,nationalId} = req.body;
    // console.log(req.body);
    try {
        var userExists = await UserModel.findOne({email: email});
        // console.log(userExists);
        if (userExists) return next(errorHandler(401, 'User with this email already exists'));
         else {
            const hashedPassword = bcryptjs.hashSync(password, 10);
            
            var newUser = new UserModel({
                email: email, 
                password: hashedPassword, 
                fullName: fullName ,
                phoneNumber: phoneNumber,
                confirmPassword: confirmPassword,
                nationalId: nationalId,
                role: role
            });

            var savedUser = await newUser.save();
            res.status(201).json({ message: 'Account created!'});
            // console.log(savedUser);
        }
    } catch (error) {
        return next(errorHandler(500, error.message));
    }

}

// sign in for the admin
const SignIn = async (req, res, next) =>{
    const {email, password}= req.body;
    try {
         const validUser = await UserModel.findOne({email: email});
         if (!validUser) return next(errorHandler(401, 'Invalid email or password'));

         const validPassword = bcryptjs.compareSync(password,validUser.password);
         if (!validPassword) return next(errorHandler(401, 'Invalid email or password'));
         
         const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET_KEY);
         const { password: hashedPassword, ...rest} = validUser._doc;
         
         const expiryDate = new Date(Date.now()+3600000); //1hour

         res
         .cookie('access token', token, {httpOnly: true, expires: expiryDate})
         .status(200)
         .json({message: "you've signed in successfully",rest});
        
    } catch (error) {
        next(errorHandler(error));
    }
     
}
//reset password for admin
const ResetPassword = async( req, res, next) =>{
        try {
            const validUser = await UserModel.findOne({ email: req.body.email});    
            if (!validUser) return next(errorHandler(401, "Invalid email"));
            
            var token = jwt.sign({ email: req.body }, process.env.JWT_SECRET_KEY, { expiresIn: 1200 });
    
            var recoveryLink = `http://localhost:3000/reset-password/${token}/${validUser._id}`;
            
           await sendEmail(validUser.email, 'Reset Password', recoveryLink);
    
            res.status(200).json({ message: `Password reset link sent to your email!` });
        } catch (error) {
            // next(errorHandler(error));
            res.status(500).json(error.message);
        }
    }
    



// here i am going to put the veterinary login and mcc log in 
// veterinary log in 
const VetSignIn = async (req, res, next) =>{
    
}
const MccUserSignIn = async (req,res,next) => {

}

const allSignIn = asyncWrapper(async(req,res,next) => {
    const { role, district } = req.query;
    const { email, password } = req.body;
        
    if (!email || !password || !role) {
        throw new CustomError.BadRequestError('Please provide all required credentials');
    }   
    const { error } = userAccountSignInValidationSchema.validate({ email, password });
    if (error) { 
        return res.status(statusCodes.BAD_REQUEST).send({ msg: error.message }) 
    }
    var response = {};

    
     

});
const filtering = async(req, res,next ) =>{
    const districtName = req.params;
    

}



module.exports = {
    SignUp, 
    SignIn, 
    ResetPassword,
    VetSignIn,
    MccUserSignIn,
    allSignIn, filtering
};