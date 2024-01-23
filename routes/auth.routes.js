const express = require("express");
const {
  SignIn,
  SignUp,
  ResetPassword,
  VetSignIn,
  MccUserSignIn,
} = require("../controller/auth.controller");
const authRoute = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         email: email@example.com
 *         password: myPassword!
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: The authentication authorization managing API
 */

/**
 * @swagger
 * /mpas/authentication/v1/auth/signin:
 *   post:
 *     summary: Log into user account
 *     tags: [Authentication]
 *     requestBody:
 *          required: true
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *          description: The user was successfully authorised
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/login'
 *       403:
 *          description: Wrong email or password
 *       500:
 *          description: Internal Server Error
 */

authRoute.post("/signin", SignIn);
authRoute.post("/signup", SignUp);
authRoute.post("/Resetpassword", ResetPassword);
authRoute.post("/vet/signin", VetSignIn);
authRoute.post("/mccUser/signin", MccUserSignIn);

// authRoute

module.exports = authRoute;
