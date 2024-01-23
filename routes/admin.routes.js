const express = require("express");
const {
  addVeterian,
  removeVeterinary,
  findVeterinaryById,
  listOfVeterinary,
  updateVeterinary,
} = require("../controller/admin.controller");

const adminRouter = express.Router();

/**
 * @swagger
 * components:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - nationalId
 *         - phoneNumber
 *         - province
 *         - district
 *       properties:
 *         fullName:
 *           type: string
 *           description: Name of the veterinary
 *           default: "Frank MUHIZI"
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the veterinary
 *           default: "frank@example.com"
 *         nationalId:
 *           type: integer
 *           description: nationalId of the veterinary
 *           default: 0987654321234567
 *         phoneNumber:
 *           type: string
 *           description: Phone number of the veterinary
 *           default: "+1234567890"
 *         province:
 *           type: string
 *           description: Province where the veterinary is located
 *           default: "Some Province"
 *         district:
 *           type: string
 *           description: District where the veterinary is located
 *           default: "Some District"
 *       examples:
 *         fullName: "Frank MUHIZI"
 *         email: "frank@example.com"
 *         nationalId: 0987654321234567
 *         phoneNumber: "+1234567890"
 *         province: "Some Province"
 *         district: "Some District"
 */

/**
 * @swagger
 * tags:
 *   name: VETERINARY
 *   description: The veterinary managing API
 */


adminRouter.post("/addVet", addVeterian);
adminRouter.delete("/removeVet", removeVeterinary);
adminRouter.get("/findVet", findVeterinaryById);
adminRouter.get("/allVets", listOfVeterinary);
adminRouter.patch("/updateVet", updateVeterinary);

module.exports = adminRouter;
