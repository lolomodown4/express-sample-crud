const express = require("express");

const app = express();

/* to use environment variables */
const dotenv = require("dotenv").config();

/* mongo DB connection */
const dbConnect = require("./config/dbConnection");
dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("homepage");
});

/* for routing */
const productRouter = require("./routes/product");
app.use("/product", productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
