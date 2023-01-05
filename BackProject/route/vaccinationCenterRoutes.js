const express = require("express");
const router = express.Router();
const centerController = require("../controller/vaccinationCenterController");

router.post("/add", centerController.add);
router.post("/update/:id", centerController.update);
router.get("/delete/:id", centerController.deleteCenter);
router.get("/list", centerController.getAll);


//router.post("/getByName", centerController.getByName);

router.get("/get/:id", centerController.getById);

module.exports = router;