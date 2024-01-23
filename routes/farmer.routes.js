/**
 * @swagger
 * components:
 *   schemas:
 *     Farmer:
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


/** 
 * @swagger
 * tags: 
 *   - name: Farmer
 *     description: The farmer managing API
 * /mpas/farmerNews/farmer/allFarmers:
 *   get:
 *     summary: List of all farmer
 *     tags:
 *       - Farmer
 *     responses:
 *       200:
 *         description: This is the farmer list
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/farmer'
 */
/** 
 * @swagger
 
 * /mpas/farmerNews/farmer/addFarmer:
 *   post:
 *     summary: Create a farmer
 *     tags:
 *       - Farmer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Farmer'
 *     responses:
 *       200:
 *         description: This farmer is created
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 *       500:
 *         description: Some server error
*/
/**
 * @swagger
 * /mpas/farmerNews/farmer/updateFarmers:
 *   patch:
 *     summary: Update farmer
 *     tags:
 *       - Farmer
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Farmer'
 *     responses:
 *       '200':
 *         description: Farmer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 *       '500':
 *         description: Some server error
 *       '400':
 *         description: Bad request
 */
/**
 * @swagger
 * /mpas/farmerNews/farmer/deleteFarmer:
 *   delete:
 *     summary: removing a farmer
 *     tags:
 *       - Farmer
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Farmer'
 *     responses:
 *       '200':
 *         description: Farmer deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 *       '500':
 *         description: Some server error
 *       '400':
 *         description: Bad request
 */
/**
 * @swagger
 * /mpas/farmerNews/farmer/findFarmer:
 *   get:
 *     summary:  Find farmer by ID
 *     tags:
 *       - Farmer
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Farmer is found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farmer'
 *       '500':
 *         description: Some server error
 *       '400':
 *         description: Bad request
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
