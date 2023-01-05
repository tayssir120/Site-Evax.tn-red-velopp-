
const express = require("express");
const router = express.Router();
const validatorCnontroller = require('../controller/validatorController')

const validationController = require("../controller/validationController");


router.get("/", validationController.validate);
router.get("/verification", validationController.verification);
router.post("/add", validationController.add);
router.post("/fixe", validationController.fixe);
router.post("/mobile", validationController.mobile);



router.post('/connect',validatorCnontroller.connect)
router.post('/register',validatorCnontroller.register)

module.exports = router

