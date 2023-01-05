const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const citizenSchema = new Schema(
  {
    cin: {
      type: String,
      unique: true,
    },
    code: {
      type: Number,
      default: Math.floor(Math.random() * (99999999 - 10000000) + 10000000),
      unique: true,
    },
    dateOfBirth: {
      type: Date,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    gender: {
      type: String,
    },
    vaccinationGovernorate: {
      type: String,
    },
    vaccinationDelegation: {
      type: String,
    },
    email: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    grandfatherName: {
      type: String,
    },
    motherFirstname: {
      type: String,
    },
    motherLastname: {
      type: String,
    },
    birthGovernorate: {
      type: String,
    },
    birthDelegation: {
      type: String,
    },
    birthMunicipality: {
      type: String,
    },
    passportNumber: {
      type: String,
    },
    nativeCountry: {
      type: String,
    },
    infectedWithCovid: {
      type: Boolean,
      default: false,
    },
    infectionDate: {
      type: Date,
      default: null,
    },
    diabetic: {
      type: Boolean,
    },
    bloodPressure: {
      type: Boolean,
    },
    chronicKidneyDisease: {
      type: Boolean,
    },
    congestiveHeartFailure: {
      type: Boolean,
    },
    organTransplant: {
      type: Boolean,
    },
    chronicRespiratoryDisease: {
      type: Boolean,
    },
    cancerTreatmentOrWeakenTheImmuneSystem: {
      type: Boolean,
    },
    weight: {
      type: Number,
    },
    height: {
      type: Number,
    },
    healthSector: {
      type: Boolean,
    },
    appointment: {
      type: Boolean,
      default: false,
    },
    dateOfAppointment: {
      type: Date,
      default: null,
    },
    dose1: {
      type: Boolean,
      default: false,
    },
    dateDose1: {
      type: Date,
    },
    vaccine1: {
      type: String,
    },
    dose2: {
      type: Boolean,
      default: false,
    },
    dateDose2: {
      type: Date,
    },
    vaccine2: {
      type: String,
    },
    vaccinated: {
      type: Boolean,
      default: false,
    },
    vaccinator: {
      type: String,
    },
    vaccinationLocation: {
      type: String,
    },
  },
  { timestamps: true }
);
const Citizen = mongoose.model("citizen", citizenSchema);
module.exports = Citizen;
