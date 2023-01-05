const Pharmacy = require("../model/pharmacy");

//add pharmacy
const add = (req, res, next) => {
  let pharmacy = new Pharmacy({
    name: req.body.name,
    fixNumber: req.body.fixNumber,
    mobileNumber: req.body.mobileNumber,
    type: req.body.type,
    adress: req.body.adress,
    governorate: req.body.governorate,
    delegation: req.body.delegation,
    pharmacist: req.body.pharmacist,
  });

  if (
    req.body.name == "" ||
    req.body.fixNumber == "" ||
    req.body.mobileNumber == "" ||
    req.body.type == "" ||
    req.body.adress == "" ||
    req.body.governorate =="" ||
    req.body.delegation =="" ||
    req.body.pharmacist == ""
  ) {
    return res.status(400).json("fields cannot be empty");
  }

  pharmacy
    .save()
    .then(() => {
      res.status(200).json({
        message: "Pharmacy added successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//update pharmacy
const update = (req, res) => {
  let updatedData = req.body;
  Pharmacy.findByIdAndUpdate(req.params.id, { $set: updatedData })
    .then(() => {
      res.status(200).json({
        message: "Pharmacy updated successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//delete pharmacy
/*const deletePharmacy = (req, res) => {
    Pharmacy.findOneAndDelete({
        name: req.body.name,
      })
        .then(() => {
          res.status(200).json({
            message: "Pharmacy deleted successfully!",
          });
        })
        .catch((error) => {
          res.send(error);
        });
};*/

//delete pharmacy
const deletePharmacy = (req, res) => {
  Pharmacy.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Pharmacy deleted successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

//get all pharmacy
const getAll = (req, res) => {
  Pharmacy.find()
    .then((Pharmacy) => res.json(Pharmacy))
    .catch((err) => res.status(404).json("No pharmacy Found"));
};

//get pharmacy by name
const getByName = (req, res) => {
  /*Pharmacy.find({ name: req.body.name })
    .then((Pharmacy) => res.json(Pharmacy))
    .catch((err) => res.status(404).json("Pharmacy Not Found"));*/
};

//get by id
const getById = (req, res) => {
  Pharmacy.findById(req.params.id)
    .then((Pharmacy) => res.json(Pharmacy))
    .catch((err) => res.status(404).json("Pharmacy Not Found"));
};

module.exports = { add, update, deletePharmacy, getAll, getByName, getById };
