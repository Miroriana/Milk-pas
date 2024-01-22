const express= require('express');
const {SignIn, SignUp, ResetPassword,VetSignIn,MccUserSignIn} = require('../controller/auth.controller')
const authRoute = express.Router();

authRoute.post('/signin', SignIn);
authRoute.post('/signup', SignUp);
authRoute.post('/Resetpassword',ResetPassword)
authRoute.post('/vet/signin', VetSignIn);
authRoute.post('/mccUser/signin', MccUserSignIn);

// authRoute

module.exports= authRoute;