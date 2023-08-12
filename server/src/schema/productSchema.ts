import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Stock: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;