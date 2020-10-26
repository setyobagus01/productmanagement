import { Router } from "express";
import Product from "../models/Product";
import auth from "../middleware/auth";

const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) throw Error("No product added");
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", auth, async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    unitName: req.body.unitName,
    categoryName: req.body.categoryName,
    brandName: req.body.brandName,
    stock: req.body.stock,
    het: req.body.het,
    price: req.body.productName,
  });

  try {
    const product = await newProduct.save();
    if (!product) throw Error("Something went wrong saving the product");

    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  const {
    productName,
    unitName,
    categoryName,
    brandName,
    stock,
    het,
    price,
  } = req.body;

  let product;

  try {
    product = await Product.findById(req.params.id);
    if (!product) throw Error("No product found");
    product.productName = productName;
    product.unitName = unitName;
    product.categoryName = categoryName;
    product.brandName = brandName;
    product.stock = stock;
    product.het = het;
    product.price = price;

    const updateProduct = await product.save();
    if (!updateProduct)
      throw Error("Something went wrong while updating product");
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw Error("No product found");
    const removed = await product.remove();
    if (!removed)
      throw Error("Something went wrong while trying to remove product");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
