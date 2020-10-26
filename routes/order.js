import { Router } from "express";
import Order from "../models/Order";
import auth from "../middleware/auth";

const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const order = await Order.find();
    if (!order) throw Error("No order added");
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", auth, async (req, res) => {
  const {
    name,
    phoneNumber,
    address,
    orderVia,
    shipper,
    provinceDestination,
    cityDestination,
    subdistrictDestination,
    postalCode,
    orderStatus,
  } = req.body;

  const newOrder = new Order({
    name,
    phoneNumber,
    address,
    orderVia,
    shipper,
    provinceDestination,
    cityDestination,
    subdistrictDestination,
    postalCode,
    orderStatus,
  });

  try {
    const order = await newOrder.save();
    if (!order) throw Error("Something went wrong when saving the order");
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  const {
    name,
    phoneNumber,
    address,
    orderVia,
    shipper,
    provinceDestination,
    cityDestination,
    subdistrictDestination,
    postalCode,
    orderStatus,
  } = req.body;

  let order;

  try {
    order = await Order.findById(req.params.id);
    if (!order) throw Error("No order found");
    order.name = name;
    order.phoneNumber = phoneNumber;
    order.address = address;
    order.orderVia = orderVia;
    order.shipper = shipper;
    order.provinceDestination = provinceDestination;
    order.cityDestination = cityDestination;
    order.subdistrictDestination = subdistrictDestination;
    order.postalCode = postalCode;
    order.orderStatus = orderStatus;

    const updateOrder = await order.save();
    if (!updateOrder) throw Error("Something went wrong while updating order");
    res.status(200).json(updateOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) throw Error("No order found");
    const removed = await order.remove();
    if (!removed)
      throw Error("Something went wrong while trying to deleting order");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
