// controllers/productController.js
const Product = require("../model/product");

const createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const { name, price, description } = req.body;
    const product = await Product.create({ name, price, description });
    res.status(200).json({success:true,product,message:"Product created successfully!"});
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ success: true, products:products });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = {
  createProduct,
  getProducts,
};
