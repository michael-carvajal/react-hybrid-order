// src/controllers/automationController.js
const { chromium, firefox } = require("playwright");
const crypto = require("crypto");
const { hashedData, iv, decryptHashedValues } = require("./hashedValues");

const orderFromVendor = require("./orderFromVendor");

const runAutomation = async (req, res) => {
  try {
    const {
      vendor,
      storeNumber,
      itemNumber,
      poNumber,
      quantity,
      pickup,
      tireRackAccount,
    } = req.body;
    const isTireRack = vendor === "TIRERACK" ? firefox : chromium;
    const browser = await isTireRack.launch({ headless: false });
    const page = await browser.newPage();

    function deriveKey(password, salt, iterations, keylen) {
      return crypto.pbkdf2Sync(password, salt, iterations, keylen, "sha256");
    }

    const key = deriveKey("juan_rocks_123", "salt", 100000, 32);
    const decryptedValues = decryptHashedValues(hashedData, iv, key);

    let response = await orderFromVendor(
      decryptedValues,
      page,
      storeNumber,
      itemNumber,
      quantity,
      vendor,
      poNumber,
      pickup,
      tireRackAccount
    );

    setTimeout(() => {
      console.log("waiting for next submission");
    }, 60000);

    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = { runAutomation };
