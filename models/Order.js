import { Schema, model } from "mongoose";

// Create Schema
const OrderSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orderVia: {
    type: String,
    required: true,
  },
  shipper: {
    type: String,
    required: true,
  },
  provinceDestination: {
    type: String,
    required: true,
  },
  cityDestination: {
    type: String,
    required: true,
  },
  subdistrictDestination: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
});

const Order = model("order", OrderSchema);

export default Order;
