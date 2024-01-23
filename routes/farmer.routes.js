/**
 * @swagger
 * components:
 *   schemas:
 *     farmer:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - phoneNumber
 *         - nationalId
 *         - verified
 *         - sector
 *         - quantity
 *         - description
 *       properties:
 *         fullName:
 *           type: string
 *           description: Name of the farmer
 *         email:
 *           type: string
 *           description: Email of the farmer
 *         phoneNumber:
 *           type: string
 *           description: Phone number of the farmer
 *         nationalId:
 *           type: number
 *           description: National ID of the farmer
 *         password:
 *           type: string
 *           description: Password of the farmer
 *         verified:
 *           type: string
 *           description: Verification status of the farmer
 *         sector:
 *           type: string
 *           description: Sector of the farmer
 *         quantity:
 *           type: string
 *           description: Quantity related to the farmer
 */

const express = require("express");
const {
  addFarmer,
  removeFarmer,
  findFarmerById,
  listOfFarmer,
  updateFarmer,
} = require("../controller/farmer.controller");
const farmerRoute = express.Router();

farmerRoute.post("/addFarmer", addFarmer);
farmerRoute.delete("/deleteFarmer", removeFarmer);
farmerRoute.get("/findFarmer", findFarmerById);
farmerRoute.get("/allFarmers", listOfFarmer);
farmerRoute.patch("/updateFarmers", updateFarmer);

module.exports = farmerRoute;
