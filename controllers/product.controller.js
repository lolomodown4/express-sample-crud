const asyncHandler = require("express-async-handler");

const Product = require("../models/product.model");

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const newProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getSingleProduct = asyncHandler(async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(typeof req.params.id);
    const product = await Product.find({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const editSingleProduct = asyncHandler(async (req, res) => {
  const idToEdit = { _id: req.params.id };
  const updatedData = req.body;

  try {
    const updatedproduct = await Product.findOneAndUpdate(
      idToEdit,
      updatedData,
      {
        returnOriginal: false,
      }
    );

    if (!updatedproduct) {
      res.status(404).json({ message: "there is no product with that id" });
    }

    res.status(201).json(updatedproduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });

    const leftData = await Product.find();
    res.status(200).json(leftData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getAllProducts,
  newProduct,
  getSingleProduct,
  editSingleProduct,
  deleteProduct,
};
