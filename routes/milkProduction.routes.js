/**
 * @swagger
 * components:
 *   schemas:
 *     milkProduction:
 *       type: object
 *       required:
 *         - farmerId
 *         - quantity
 *         - timestamps
 *         - description
 *       properties:
 *         farmerId:
 *           type: string
 *           description: ID of the farmer
 *         quantity:
 *           type: string
 *           description: Quantity of milk production
 *         timestamps:
 *           type: string  # Adjust the type accordingly based on your requirements
 *           description: Timestamps related to milk production
 */


const express = require("express");
const router = express.Router();
const {
  listOfmilkProduction,
  findmilkProductionById,
  removemilkProduction,
  addmilkProduction,
  updatemilkProduction,
  addedMilkProduction,
} = require("../controller/milkProduction.controller");

router.post("/addMilkProduction", addmilkProduction, addedMilkProduction);
router.delete("/deleteMilkProduction", removemilkProduction);
router.get("/findMilkProduction", findmilkProductionById);
router.get("/allMilkProductions", listOfmilkProduction);
router.put("/updateMilkProduction", updatemilkProduction);

module.exports = router;
