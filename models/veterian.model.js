const { Schema, model } = require("mongoose");
//veterinary model: mcc registration
const mccSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
});

const MccModel = model("mcc", mccSchema);
module.exports = MccModel;
