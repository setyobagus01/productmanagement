import { Router } from "express";
import Bank from "../models/Bank";
import auth from "../middleware/auth";

const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const banks = await Bank.find();
    if (!banks) throw Error("No bank account added");

    res.json(banks);
  } catch (err) {
    res.json(400).json({ message: err.message });
  }
});

router.post("/", auth, async (req, res) => {
  const { bankAccount, accountName, accountNumber } = req.body;

  const newBankAccount = new Bank({
    bankAccount,
    accountName,
    accountNumber,
  });
  try {
    const bankAccount = await newBankAccount.save();
    if (!bankAccount)
      throw Error("Something went wrong while saving bank account");
    res.status(201).json(bankAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const bankAccount = await Bank.findById(req.params.id);
    if (!bankAccount) throw Error("No bank account found");
    const removed = await bankAccount.remove();
    if (!removed)
      throw Error("Something went wrong while deleting bank account");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
