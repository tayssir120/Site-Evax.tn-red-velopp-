const express = require("express");
const router = express.Router();
const pharmacyController = require("../controller/pharmacyController");

router.post("/add", pharmacyController.add);
router.post("/update/:id", pharmacyController.update);
router.get("/delete/:id", pharmacyController.deletePharmacy);
router.get("/list", pharmacyController.getAll);
//router.post("/getByName", pharmacyController.getByName);
router.get("/get/:id", pharmacyController.getById);

module.exports = router;