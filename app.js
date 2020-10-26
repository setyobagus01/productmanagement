import express from "express";
import mongoose from "mongoose";
import config from "./config";

// routes
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import productRoutes from "./routes/product";
import orderRoutes from "./routes/order";
import bankRoutes from "./routes/bank";

const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Powered-By,Allow,Content-Type,Content-Length,ETag,Date,Connection, Authorization"
  );
  next();
});

const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/banks", bankRoutes);

export default app;
