/**
 * @swagger
 * components:
 *   schemas:
 *     mccUser:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - phoneNumber
 *         - nationalId
 *         - verified
 *         - description
 *       properties:
 *         fullName:
 *           type: string
 *           description: Name of the MCC user
 *         email:
 *           type: string
 *           description: Email of the MCC user
 *         phoneNumber:
 *           type: string
 *           description: Phone number of the MCC user
 *         nationalId:
 *           type: number
 *           description: National ID of the MCC user
 *         password:
 *           type: string
 *           description: Password of the MCC user
 *         verified:
 *           type: string
 *           description: Verification status of the MCC user
 */

const express = require("express");
const {
  addMccUser,
  removeMccUser,
  findMccUserById,
  listOfMccUser,
  updateMccUser,
} = require("../controller/mccUser.controller");

const mccUserRouter = express.Router();

mccUserRouter.post("/addMccUser", addMccUser);
mccUserRouter.delete("/removeMccUser", removeMccUser);
mccUserRouter.get("/findMccUser", findMccUserById);
mccUserRouter.get("/allMccUser", listOfMccUser);
mccUserRouter.patch("/updateMccUser", updateMccUser);

module.exports = mccUserRouter;
