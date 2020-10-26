import jwt from "jsonwebtoken";
import config from "../config";

const { JWT_SECRET } = config;

export default (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Check for token
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    // Verify token
    const decode = jwt.verify(token, JWT_SECRET);
    // Add user from payload
    req.user = decode;
    next();
  } catch (err) {
    res.status(400).json({ message: "Token is not valid" });
  }
};
