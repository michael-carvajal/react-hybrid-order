// src/controllers/automationController.js
const { chromium, firefox } = require("playwright");
const crypto = require("crypto");
const { hashedData, iv, decryptHashedValues } = require("./hashedValues");
const orderFromVendor = require("./orderFromVendor");

let browserInstances = {
  chromium: null,
  firefox: null,
};

const initBrowser = async (vendor) => {
  const isTireRack = vendor === "TIRERACK";
  const browserType = isTireRack ? firefox : chromium;
  const browserKey = isTireRack ? 'firefox' : 'chromium';

  if (!browserInstances[browserKey]) {
    browserInstances[browserKey] = await browserType.launch({ headless: false });
  }
  return browserInstances[browserKey];
};

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

    const browser = await initBrowser(vendor);
    const page = await browser.newPage();

    const deriveKey = (password, salt, iterations, keylen) => {
      return crypto.pbkdf2Sync(password, salt, iterations, keylen, "sha256");
    };

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
