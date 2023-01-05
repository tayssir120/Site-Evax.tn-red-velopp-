let mongoose = require("mongoose");
const JPO = require("../model/JPO");
const Center = require("../model/vaccinationCenter");

//add a JPO
const addJPO = (req, res, next) => {
  let centerId = req.body.centerId;
  let numberPeople = req.body.numberPeopleToBeVaccinated;
  let jpo = new JPO({
    centerName: req.body.centerName,
    numberPeopleToBeVaccinated: req.body.numberPeopleToBeVaccinated,
    chefCenter: req.body.chefCenter,
    nameOfvaccine: req.body.nameOfvaccine,
    quantity: req.body.quantity,
    ageRange: req.body.ageRange,
    centerId: req.body.centerId,
  });
  Center.findById(centerId).then((center) => {
    if (
      req.body.centerName == "" ||
      req.body.numberPeopleToBeVaccinated == "" ||
      req.body.chefCenter == "" ||
      req.body.nameOfvaccine == "" ||
      req.body.quantity == "" ||
      req.body.ageRange == "" ||
      req.body.centerId == ""
    ) {
      return res.status(400).json("fields cannot be empty");
    } else if (numberPeople <= center.capacity) {
      jpo
        .save()
        .then(() => {
          res.status(200).json({
            message: "JPO added successfully!",
          });
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      return res
        .status(400)
        .json("The capacity of the center is not enough for this JPO");
    }
  });
};

//update a JPO
const updateJPO = (req, res) => {
  let updatedData = req.body;
  JPO.findByIdAndUpdate(req.params.id, { $set: updatedData })
    .then(() => {
      res.status(200).json("JPO updated successfully!");
    })
    .catch((error) => {
      res.send(error);
    });
};
// delete a JPO
const deleteJPO = (req, res) => {
  JPO.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json("JPO deleted successfully!");
    })
    .catch((error) => {
      res.send(error);
    });
};

//Get all JPOs
const getAllJPOs = (req, res) => {
  JPO.find()
    .then((jpo) => res.json(jpo))
    .catch((err) => res.status(404).json("No JPO Found"));
};

//get JPO by id
const getJPOById = (req, res) => {
  JPO.findById(req.params.id)
    .then((jpo) => res.json(jpo))
    .catch((err) => res.status(404).json("JPO Not Found"));
};
module.exports = { addJPO, updateJPO, deleteJPO, getAllJPOs, getJPOById };
