/**
 * @swagger
 * components:
 *   schemas:
 *     veterinary:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - phoneNumber
 *         - nationalId
 *         - verified
 *         - province
 *         - sector
 *         - description
 *       properties:
 *         fullName:
 *           type: string
 *           description: Name of the admin
 *         email:
 *           type: string
 *           description: Email of the admin
 *         phoneNumber:
 *           type: string
 *           description: Phone number of the admin
 *         nationalId:
 *           type: number
 *           description: National ID of the admin
 *         password:
 *           type: string
 *           description: Password of the admin
 *         verified:
 *           type: string
 *           description: Verification status of the admin
 *         province:
 *           type: string
 *           description: Province of the admin
 *         sector:
 *           type: string
 *           description: Sector of the admin
 */

/** 
 * @swagger
 * tags: 
 *   - name: Veterinaries
 *     description: The veterinary managing API
 * /mpas/veterian/vet/allVets:
 *   get:
 *     summary: List of all veterinaries
 *     tags:
 *       - vet
 *     responses:
 *       200:
 *         description: This is the veterinary list
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/veterinary'
 */
/** 
 * @swagger
 * tags: 
 *   - name: Veterinaries
 *     description: The veterinary managing API
 * /mpas/veterian/vet/addVet:
 *   post:
 *     summary: Create a veterinary
 *     tags:
 *       - vet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/veterinary'
 *     responses:
 *       200:
 *         description: This veterinary is created
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/veterinary'
 *       500:
 *         description: Some server error
*/

/**
 * @swagger
 * tags:
 *   - name: Veterinaries
 *     description: The veterinary managing API
 * /mpas/veterian/vet/updateVet:
 *   patch:
 *     summary: Update veterinary
 *     tags:
 *       - vet
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
 *             $ref: '#/components/schemas/veterinary'
 *     responses:
 *       '200':
 *         description: Veterinary updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/veterinary'
 *       '500':
 *         description: Some server error
 *       '400':
 *         description: Bad request
 */
/**
 * @swagger
 * tags:
 *   - name: Veterinaries
 *     description: The veterinary managing API
 * /mpas/veterian/vet/removeVet:
 *   delete:
 *     summary: removing a veterinary
 *     tags:
 *       - vet
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
 *             $ref: '#/components/schemas/veterinary'
 *     responses:
 *       '200':
 *         description: Veterinary deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/veterinary'
 *       '500':
 *         description: Some server error
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * tags:
 *   - name: Veterinaries
 *     description: The veterinary managing API
 * /mpas/veterian/vet/findVet:
 *   get:
 *     summary:  Find veterinary by ID
 *     tags:
 *       - vet
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Veterinary is found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/veterinary'
 *       '500':
 *         description: Some server error
 *       '400':
 *         description: Bad request
 */






const express = require("express");
const {
  addVeterian,
  removeVeterinary,
  findVeterinaryById,
  listOfVeterinary,
  updateVeterinary,
} = require("../controller/admin.controller");

const adminRouter = express.Router();

adminRouter.post("/addVet", addVeterian);
adminRouter.delete("/removeVet", removeVeterinary);
adminRouter.get("/findVet", findVeterinaryById);
adminRouter.get("/allVets", listOfVeterinary);
adminRouter.patch("/updateVet", updateVeterinary);

module.exports = adminRouter;
