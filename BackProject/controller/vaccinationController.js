const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = require("mongodb").ObjectId;
var nodemailer = require("nodemailer");
const sendmail = require("sendmail")();
const Citizen = require("../model/citizen");
const Vaccine = require("../model/vaccine");
const Center = require("../model/vaccinationCenter");

const getAllVaccines = (req, res) => {
  Vaccine.find()
    .then((Vaccine) => res.json(Vaccine))
    .catch((err) => res.status(404).json("No vaccines Found"));
};
const getVaccineById = (req, res) => {
  Vaccine.findById(req.params.id)
    .then((Vaccine) => res.json(Vaccine))
    .catch((err) => res.status(404).json("Vaccine not found"));
};

const withoutAppointment = (req, res) => {
  center = Center.findOne({
    capacity: { $ne: null },
  }).then((center) => {
    res.json(center);
    let cap = center.capacity;
    nCapacity = cap - 1;
    let updatedData = {
      capacity: nCapacity,
    };
    id = center.id;
    let ncenter = Center.findByIdAndUpdate(id, { $set: updatedData }).then(
      (ncenter) => {
        console.log("cap:" + updatedData);
      }
    );
    citizen = Citizen.findOne({
      appointment: false},{
      birthDelegation: center.centerDelegation,
    }).then((citizen) => {
      //console.log(citizen);
      console.log("id:" + citizen.id);
      console.log("Del : " + center.name);
      idCitizen = citizen.id;
      nCitizen = Citizen.findOneAndUpdate(citizen.id, {
        vaccinationLocation: center.centerDelegation,
        appointment: true,
        dateOfAppointment: new Date(Date.now() + 12096e5),
      }).then((nCitizen) => {
        console.log(
          nCitizen.firstname + "locl : " + nCitizen.vaccinationLocation
        );
        sendmail({
          from: "evax@test.com",
          to: `${nCitizen.email}`,
          subject: "Date de rendez-vous de vaccination ",
          html: `<p> Bonjour, </p> <br/> <p>nous vous envoyons ce mail pour vous informer que  votre rendez-vous de vaccination aura lieu le ${nCitizen.dateOfAppointment} au centre ${nCitizen.vaccinationLocation}.</p> `,
        });
      });
    });
  });
};

// Adding vaccine
const addVaccine = (req, res) => {
  const vaccine = new Vaccine(req.body);
  if (!req.body.quantity) {
    {
      return res.status(400).json({
        status: "error",
        error: "field cannot be empty",
      });
    }
  }
  vaccine.save(function (err) {
    if (err) {
      console.log("An error occured while adding new vaccine");
    }

    console.log("Vaccine is added successfully!");
  });
  res.send("Vaccine is added successfully!");
};
// updating vaccine's quantity
const updateVaccineQuantity = (req, res) => {
  let id = req.params.id;
  let newQuantity = req.body.newQuantity;
  let Fquantity = 0;
  let vaccine = Vaccine.findById(id).then((vaccine) => {
    let q = vaccine.quantity;
    Fquantity = q + newQuantity;
    let updatedData = {
      quantity: Fquantity,
    };
    let vaccineF = Vaccine.findByIdAndUpdate(id, {
      $set: updatedData,
    })
      .then((vaccineF) =>
        res.status(200).json("vaccine updated  successfully ")
      )
      .catch((err) => res.status(400).json("An error occured"));
  });
};
//Assign Vaccines to a Center
const assignVaccineCenter = (req, res) => {
  let NCenter = req.body.NCenter;
  let NVaccine = req.body.NVaccine;
  let vquantity = req.body.vquantity;
  let vaccine = Vaccine.findOne({ NVaccine }).then((vaccine) => {
    // res.json(vaccine);
    //console.log(vaccine.name);
    //console.log(vquantity);
    //let vname = vaccine.name;
    //let objv = { vaccine: idVaccine, name: vname, quantity: vquantity };
    //console.log(objv);
    //console.log(typeof objv);

    let centerF = Center.findOneAndUpdate(
      { NCenter },
      {
        $push: {
          vaccines: req.body.NVaccine,
        },
      }
    ).then((centerF) => {
      res.json(centerF);
    });
    Fquantity = vaccine.quantity - vquantity;
    let updatedData = {
      quantity: Fquantity,
    };
    let vaccineF = Vaccine.findOneAndUpdate(
      { NVaccine },
      {
        $set: updatedData,
      }
    )
      .then((vaccineF) => res.status(200))
      .catch(() => res.status(400));
  });
};

const deleteVaccine = (req, res) => {
  Vaccine.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Vaccine deleted successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  getAllVaccines,
  getVaccineById,
  withoutAppointment,
  addVaccine,
  updateVaccineQuantity,
  assignVaccineCenter,
  deleteVaccine
};
