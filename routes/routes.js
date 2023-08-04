const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/currencies", async (req, res) => {
  try {
    const response = await axios.get(
      "https://developer-api-testmode.dnb.no/currencies/v1/convert/NOK",
      {
        headers: {
          "Content-type": "application/json",
          "x-api-key": "344e09fefea74fe3af015544d50728e7",
        },
      }
    );
    res.json(response.data); // Send the data back to the frontend
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from external API." });
  }
});

module.exports = router;
