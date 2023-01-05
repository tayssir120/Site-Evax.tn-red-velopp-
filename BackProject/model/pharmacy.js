const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pharmacySchema = new Schema(
  {
    name: {
      type: String,
    },
    fixNumber: {
      type: Number,
    },
    mobileNumber: {
      type: Number,
    },
    type: {
      type: String,
    },
    governorate: {
      type: String,
    },
    delegation: {
      type: String,
    },
    adress: {
      type: String,
    },
    pharmacist: {
      type: String,
    },
  },
  { timestamps: true }
);
const Pharmacy = mongoose.model("pharmacy", pharmacySchema);
module.exports = Pharmacy;
