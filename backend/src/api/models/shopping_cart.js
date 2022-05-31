const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shoppingCartSchema = new Schema({
  date: {
    default: () => Date.now(),
  },
  items: [Item],
});
module.exports = shoppingCartSchema;
