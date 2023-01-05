const express = require("express");
const router = express.Router();
const volunteerController = require("../controller/volunteerController");

router.post("/add", volunteerController.add);
router.post("/update/:id", volunteerController.update);
router.get("/delete/:id", volunteerController.deleteVolunteer);
router.get("/list", volunteerController.getAll);
router.get("/get/:id", volunteerController.getById);

module.exports = router;

