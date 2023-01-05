const express = require("express");
const router = express.Router();
const vaccinationController = require("../controller/vaccinationController");

router.post("/addVaccine", vaccinationController.addVaccine);
router.post(
  "/updateVaccineQuantity/:id",
  vaccinationController.updateVaccineQuantity
);
router.post("/assignVaccineCenter", vaccinationController.assignVaccineCenter);
router.get("/withoutAppointment", vaccinationController.withoutAppointment);
router.get("/getAllVaccines", vaccinationController.getAllVaccines);
router.get("/getVaccineByid/:id", vaccinationController.getVaccineById);
router.get("/delete/:id", vaccinationController.deleteVaccine);
 
module.exports = router;
