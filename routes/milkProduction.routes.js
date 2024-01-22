const express = require('express');
const router = express.Router();
const {
    listOfmilkProduction, findmilkProductionById, removemilkProduction, addmilkProduction,updatemilkProduction, addedMilkProduction
} = require('../controller/milkProduction.controller');

router.post('/addMilkProduction', addmilkProduction, addedMilkProduction);
router.delete('/deleteMilkProduction', removemilkProduction);
router.get('/findMilkProduction', findmilkProductionById);
router.get('/allMilkProductions', listOfmilkProduction);
router.put('/updateMilkProduction', updatemilkProduction);

module.exports = router;