const Volunteer = require("../model/volunteer");

//add a volunteer
const add = (req, res, next) => {
  let volunteer = new Volunteer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    position: req.body.position,
    workPlace: req.body.workPlace,
  });

  if (
    req.body.firstName == "" ||
    req.body.lastName == "" ||
    req.body.tel == "" ||
    req.body.position == "" ||
    req.body.workPlace == ""
  ) {
    return res.status(400).json("fields cannot be empty");
  }
  volunteer
    .save()
    .then(() => {
      res.status(200).json({
        message: "Volunteer added successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//update a volunteer
const update = (req, res) => {
  let updatedData = req.body;

  Volunteer.findByIdAndUpdate(req.params.id, { $set: updatedData })
    .then(() => {
      res.status(200).json("Volunteer updated successfully!");
    })
    .catch((error) => {
      res.send(error);
    });
};
// delete a volunteer
const deleteVolunteer = (req, res) => {
  Volunteer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Volunteer deleted successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//Get all volunteers
const getAll = (req, res) => {
  Volunteer.find()
    .then((volunteer) => res.json(volunteer))
    .catch((err) => res.status(404).json("No volunteer Found"));
};

//get by id
const getById = (req, res) => {
  Volunteer.findById(req.params.id)
    .then((volunteer) => res.json(volunteer))
    .catch((err) => res.status(404).json("Volunteer Not Found"));
};
module.exports = { add, update, deleteVolunteer, getAll, getById };
