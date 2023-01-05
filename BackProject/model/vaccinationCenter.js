const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const vaccinationCenterSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    adress: {
      type: String,
    },
    chefCenter: {
      type: String,
    },
    capacity: {
      type: Number,
    },
    centerGovernorate: {
      type: String,
    },
    centerDelegation: {
      type: String,
    },
    vaccines: [
      {
        type: Schema.Types.String,
        ref: "Vaccine",
      },
    ],
  },
  { timestamps: true }
);
const VaccinationCenter = mongoose.model(
  "vaccinationCenter",
  vaccinationCenterSchema
);

module.exports = VaccinationCenter;
