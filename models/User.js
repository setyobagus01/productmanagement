import { Schema, model } from "mongoose";

// Create Schema
const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

const User = model("user", UserSchema);

export default User;
