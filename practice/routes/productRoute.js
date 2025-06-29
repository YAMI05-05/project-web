// routes/productRoute.js
const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/productController");

router.post("/create", createProduct);
router.get("/getall", getProducts);

module.exports = router;
