import { Router } from "express";
// User Model
import User from "../models/User";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users exist");
    res.json(users);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

export default router;
