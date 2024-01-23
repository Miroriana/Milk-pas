/**
 * @swagger
 * components:
 *   schemas:
 *     mcc:
 *       type: object
 *       required:
 *         - fullName
 *         - sector
 *         - description
 *       properties:
 *         fullName:
 *           type: string
 *           description: Name of the MCC
 *         sector:
 *           type: string
 *           description: Sector of the MCC
 */

const express = require("express");
const {
  addMcc,
  removeMcc,
  updateMcc,
  findMcc,
  listMcc,
} = require("../controller/veterinary.controller");
const mccRouter = express.Router();

mccRouter.post("/addMcc", addMcc);
mccRouter.delete("/deleteMcc", removeMcc);
mccRouter.patch("/updateMcc", updateMcc);
mccRouter.get("/findMcc", findMcc);
mccRouter.get("/listOfMcc", listMcc);

module.exports = mccRouter;
