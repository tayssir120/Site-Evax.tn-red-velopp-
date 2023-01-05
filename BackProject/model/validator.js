const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ValidatorSchema = new Schema(
  {
    login: {
      type: String,
      unique: true,
    },
    password: {
        type: String,
        unique: true,
      },
  },  
  { timestamps: true }
);
const Validator = mongoose.model("validator", ValidatorSchema);
module.exports = Validator;
