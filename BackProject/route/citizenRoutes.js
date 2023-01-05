const express = require("express");
const router = express.Router();
const citizenController = require("../controller/citizenController");


router.post("/update", citizenController.updateCitizen);
router.post("/EvaxLogin", citizenController.sendCodeLoginEvax);
router.post("/update/:code", citizenController.updateCitizen);
router.post("/updateFirstStep", citizenController.updateFirstStep);
router.get("/getByCode/:code", citizenController.getCitizenByCode);
router.post("/report", citizenController.reportAppointment);
router.get("/get-all", citizenController.getAll);
router.get("/get/:code", citizenController.getCitizenByCode);
router.post("/getDataWithRightCode/:code", citizenController.getDataWithRightCode);
router.post("/editCIN/:code", citizenController.editCitizenWithCIN);
router.post("/editNOCIN/:id", citizenController.editCitizenWithoutCIN);
router.post("/editFOREIGN/:id", citizenController.editForeignCitizen);
router.post("/sendCode", citizenController.sendCode);
router.post("/verifCode", citizenController.verifCode);
router.post("/addCin", citizenController.addCin);
router.post("/addNoCin", citizenController.addNoCin);
router.post("/addForeign", citizenController.addForeign);
router.post("/addOnPharmacy", citizenController.addOnPharmacy);
router.get("/countAll", citizenController.countAll);
router.get("/countDose1", citizenController.countDose1);
router.get("/countDose2", citizenController.countDose2);

module.exports = router;
