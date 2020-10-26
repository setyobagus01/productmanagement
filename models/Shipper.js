import { Schema, model } from "mongoose";

// Create Schema
const ShipperSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const Shipper = model("shipper", ShipperSchema);

export default Shipper;
