const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
  },

  { timestamps: true }
);
module.exports = itemSchema;
