const express = require("express");
const router = express.Router();
const jpoController = require("../controller/jpoController");

router.post("/add", jpoController.addJPO);
router.post("/update/:id", jpoController.updateJPO);
router.get("/delete/:id", jpoController.deleteJPO);
router.get("/list", jpoController.getAllJPOs);
router.get("/get/:id", jpoController.getJPOById);

module.exports = router;
