const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { // ignore id for now
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    variations: { // contains main images
      type: Array,
      required: true
    },
    rating: {
      type: Number,
    },
    description:{
      type: Object
    },
    features: { // not descriptions
      type: Array
    },
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("Product", productSchema);
