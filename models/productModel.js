const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      require: true,
      unique: true,
    },
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    maintenance_time:{
      type: Nnmber,
      requrire: true
    },
    images: {
      type: Object,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    color:{
      type: String,
      default: Black
    },
    //Detail
    CPU: {
      type: String,
    },
    Screen:{
      type: String,
    },
    RAM: {
      type: String,
    },
    GPU:{
      type: String,
    },
    Weight:{
      type: Number,
    },
    Material:{
      type: String
    },
    DataStorage:{
      type: String
    },
    Case:{
      type: String
    },
    ConnectionType:{
      type: String
    },
    Led:{
      type: Boolean,
      defalut: false
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Products", productSchema);
