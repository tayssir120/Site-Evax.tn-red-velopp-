const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const volunteerSchema = new Schema(
  {
        firstName :{
          type: String,
        },
        lastName :{
          type: String,
        },
        tel :{
          type: Number,
        },
       position : {
        type : String
        },
        workPlace : {
        type : String
        }
  },
  { timestamps: true }
);
const Volunteer = mongoose.model(
  "Volunteer",
  volunteerSchema
);
module.exports = Volunteer;