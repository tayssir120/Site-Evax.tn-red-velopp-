const Center = require("../model/vaccinationCenter");

//add a vaccination center
const add = (req, res, next) => {
  let center = new Center({
    name: req.body.name,
    type: req.body.type,
    adress: req.body.adress,
    chefCenter: req.body.chefCenter,
    capacity: req.body.capacity,
    centerGovernorate: req.body.centerGovernorate,
    centerDelegation: req.body.centerDelegation,
  });

  if (
    req.body.name == "" ||
    req.body.type == "" ||
    req.body.adress == "" ||
    req.body.chefCenter == "" ||
    req.body.capacity == "" ||
    req.body.centerGovernorate == "" ||
    req.body.centerDelegation == ""
  ) {
    return res.status(400).json("fields cannot be empty");
  }

  center
    .save()
    .then(() => {
      res.status(200).json({
        message: "Vaccination center added successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//update a vaccination center
const update = (req, res) => {
  let updatedData = req.body;

  Center.findByIdAndUpdate(req.params.id, { $set: updatedData })
    .then(() => {
      res.status(200).json({
        message: "Vaccination center updated successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//delete a vaccination center
/*const deleteCenter = (req, res) => {
  Center.findOneAndDelete({
    name: req.body.name,
  })
    .then(() => {
      res.status(200).json({
        message: "Vaccination center deleted successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};*/

const deleteCenter = (req, res) => {
  Center.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Vaccination center deleted successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//Get all vaccination center
const getAll = (req, res) => {
  Center.find()
    .then((center) => res.json(center))
    .catch((err) => res.status(404).json("No center Found"));
};

//Get vaccination center by name
const getByName = (req, res) => {
  /*Center.find({ name: req.body.name })
    .then((center) => res.json(center))
    .catch((err) => res.status(404).json("Center Not Found"));*/
};

//get by id
const getById = (req, res) => {
  Center.findById(req.params.id)
    .then((center) => res.json(center))
    .catch((err) => res.status(404).json("Center Not Found"));
};

module.exports = { add, update, deleteCenter, getAll, getByName, getById };
