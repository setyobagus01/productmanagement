import { Schema, model } from "mongoose";

const ProductScheme = Schema({
  productName: {
    type: String,
    required: true,
  },
  unitName: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  het: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Product = model("product", ProductScheme);

export default Product;
