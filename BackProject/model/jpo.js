const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jpoSchema = new Schema(
  {
    centerName :{
          type: String,
          unique: true,
        },
    numberPeopleToBeVaccinated :{
          type: Number,
        },
    chefCenter :{
          type: String,
        },
    nameOfvaccine : {
        type : String
        },
    quantity : {
        type : Number
        },
    ageRange: {
          type: String,
        } , 
    centerId: {
        type: Schema.Types.ObjectId,
        ref: "VaccinationCenter",
          }
  },
  { timestamps: true }
);
const JPO = mongoose.model(
  "JPO",
  jpoSchema
);
module.exports = JPO;