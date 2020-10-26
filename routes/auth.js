import e, { Router } from "express";
import bcrypt from "bcryptjs";
import config from "../config";
import jwt from "jsonwebtoken";
import User from "../models/User";
import auth from "../middleware/auth";

const { JWT_SECRET } = config;

const router = Router();

router.post("/register", auth, async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name);

  // Simple validation
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "Please fill required field" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) throw Error("User already exist");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (!hash) throw Error("Something went wrong hashing the password");

    const newUser = new User({
      name,
      email,
      password: hash,
      role,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error("Something went wrong saving the user");

    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill required field" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) throw Error("User doesnt exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: 3600,
    });

    if (!token) throw Error("Couldnt sign the token");
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("User does not exist");
    res.json(user);
    req.user = user;
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
