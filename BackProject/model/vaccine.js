const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const vaccineSchema = new Schema(
  {
    name: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    /*centers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Center",
      },
    ],*/
  },
  { timestamps: true }
);
const Vaccine = mongoose.model("vaccine", vaccineSchema);
module.exports = Vaccine;
