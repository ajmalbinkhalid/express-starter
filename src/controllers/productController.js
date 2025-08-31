import Product from "../models/productModel.js";

// @desc    Get all products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// @desc    Get product by ID
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Not found" });
};
