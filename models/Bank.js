import { Schema, model } from "mongoose";

// Create Schema
const BankSchema = Schema({
  bankAccount: {
    type: String,
    required: true,
  },
  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
});

const Bank = model("bank", BankSchema);

export default Bank;
