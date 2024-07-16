// src/controllers/automationController.js
const { chromium, firefox } = require('playwright');
const crypto = require('crypto');
const { hashedData, iv, decryptHashedValues } = require('./hashedValues');
const orderFromATD = require('../scripts/atd');
const orderFromMFI = require('../scripts/mfi');
const orderFromUSA = require('../scripts/usa');
const orderFromNTW = require('../scripts/ntw');
const orderFromTirehub = require('../scripts/tirehub');
const orderFromKAndM = require('../scripts/kandm');
const orderFromTireRack = require('../scripts/tirerack');

const runAutomation = async (req, res) => {
 try {
  const { vendor, storeNumber, itemNumber, poNumber, quantity, pickup, tireRackAccount } = req.body;
  const isTireRack = vendor === 'TIRERACK' ? firefox : chromium;
  const browser = await isTireRack.launch({ headless: false });
  const page = await browser.newPage();

  function deriveKey(password, salt, iterations, keylen) {
    return crypto.pbkdf2Sync(password, salt, iterations, keylen, 'sha256');
  }

  const key = deriveKey('juan_rocks_123', 'salt', 100000, 32);
  const decryptedValues = decryptHashedValues(hashedData, iv, key);

  let websiteUrl, username, password, response;

  switch (vendor) {
    case "ATD":
      websiteUrl = decryptedValues.ATD_URL;
      username = decryptedValues.ATD_USERNAME;
      password = decryptedValues.ATD_PASSWORD;
      response = await orderFromATD(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber,
        pickup
      );
      if (response.error) {
        return response.error;
      }
      return response.confirmation;
    case "MFI":
      websiteUrl = decryptedValues.MFI_URL;
      username = decryptedValues.MFI_USERNAME;
      password = decryptedValues.MFI_PASSWORD;
      response = await orderFromMFI(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber,
        pickup
      );
      if (response.error) {
        return response.error;
      }
      return response.confirmation;
    case "USA":
      websiteUrl = decryptedValues.USA_URL;
      username = decryptedValues.USA_USERNAME;
      password = decryptedValues.USA_PASSWORD;
      response = await orderFromUSA(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber,
        pickup
      );

      if (response.error) {
        return response.error;
      }
      return response.confirmation;
    case "NTW":
      websiteUrl = decryptedValues.NTW_URL;
      username = decryptedValues.NTW_USERNAME;
      password = decryptedValues.NTW_PASSWORD;
      response = await orderFromNTW(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber,
        pickup
      );
      if (response.error) {
        return response.error;
      }
      return response.confirmation;
    case "TIREHUB":
      websiteUrl = decryptedValues.TIREHUB_URL;
      username = decryptedValues.TIREHUB_USERNAME;
      password = decryptedValues.TIREHUB_PASSWORD;
      response = await orderFromTirehub(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber,
        pickup
      );
      if (response.error) {
        return response.error;
      }
      return response.confirmation;
    case "K&M":
      websiteUrl = decryptedValues.KANDM_URL;
      username = decryptedValues.KANDM_USERNAME;
      password = decryptedValues.KANDM_PASSWORD;
      await orderFromKAndM(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber,
        pickup
      );
      break;
    case "TIRERACK":
      websiteUrl = decryptedValues.TIRERACK_URL;
      // const storeInt = parseInt(storeNumber);
      if (tireRackAccount === "MavisCorp") {
        username = decryptedValues.TIRERACK_USERNAME_MAVISCORP;
        password = decryptedValues.TIRERACK_PASSWORD_MAVISCORP;
      } else if (tireRackAccount === "A531157") {
        username = decryptedValues.TIRERACK_USERNAME_UPPERCASE;
        password = decryptedValues.TIRERACK_PASSWORD_UPPERCASE;
      } else if(tireRackAccount === "a531156"){
        username = decryptedValues.TIRERACK_USERNAME_LOWERCASE;
        password = decryptedValues.TIRERACK_PASSWORD_LOWERCASE;
      }
      // TODO: change to order from tire rack below
      response = await orderFromTireRack(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber,
        pickup
      );
      if (response.error) {
        return response.error;
      }
      return response.confirmation;
    default:
      console.log("Invalid vendor. Please choose either 'ATD' or 'other'.");
      throw new Error("Invalid vendor");
  }

    setTimeout(() => {
      console.log('waiting for next submission');  
    }, 60000);
    res.json(response);
 } catch (error) {
    console.log(error);
    res.json(error)
 }
};

module.exports = { runAutomation };
