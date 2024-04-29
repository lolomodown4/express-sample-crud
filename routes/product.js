const express = require("express");

const router = express.Router();

/* controllers */
const {
  getAllProducts,
  newProduct,
  getSingleProduct,
  editSingleProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.route("/").get(getAllProducts).post(newProduct);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(editSingleProduct)
  .delete(deleteProduct);

module.exports = router;
