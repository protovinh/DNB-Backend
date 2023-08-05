require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOption = {
  origin: "*",
  credential: true,
  optionSuccessStatus: 200,
};

const port = process.env.PORT || 4000;

app.use(cors(corsOption));
app.get("/health", (req, res) => {
  res.status(200).send({ status: "ok" });
});
app.use("/", router);

app.listen(port, () => {
  console.log("server is running on port" + port);
});
