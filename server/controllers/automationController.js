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
  const { vendor, storeNumber, itemNumber, poNumber, quantity, pickup } = req.body;
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
      case 'ATD':
        websiteUrl = decryptedValues.ATD_URL;
        username = decryptedValues.ATD_USERNAME;
        password = decryptedValues.ATD_PASSWORD;
        response = await orderFromATD(page, websiteUrl, storeNumber, itemNumber, quantity, username, password, poNumber, pickup);
        break;
      case 'MFI':
        websiteUrl = decryptedValues.MFI_URL;
        username = decryptedValues.MFI_USERNAME;
        password = decryptedValues.MFI_PASSWORD;
        response = await orderFromMFI(page, websiteUrl, storeNumber, itemNumber, quantity, username, password, poNumber, pickup);
        break;
      case 'USA':
        websiteUrl = decryptedValues.USA_URL;
        username = decryptedValues.USA_USERNAME;
        password = decryptedValues.USA_PASSWORD;
        response = await orderFromUSA(page, websiteUrl, storeNumber, itemNumber, quantity, username, password, poNumber, pickup);
        break;
      case 'NTW':
        websiteUrl = decryptedValues.NTW_URL;
        username = decryptedValues.NTW_USERNAME;
        password = decryptedValues.NTW_PASSWORD;
        response = await orderFromNTW(page, websiteUrl, storeNumber, itemNumber, quantity, username, password, poNumber, pickup);
        break;
      case 'TIREHUB':
        websiteUrl = decryptedValues.TIREHUB_URL;
        username = decryptedValues.TIREHUB_USERNAME;
        password = decryptedValues.TIREHUB_PASSWORD;
        response = await orderFromTirehub(page, websiteUrl, storeNumber, itemNumber, quantity, username, password, poNumber, pickup);
        break;
      case 'K&M':
        websiteUrl = decryptedValues.KANDM_URL;
        username = decryptedValues.KANDM_USERNAME;
        password = decryptedValues.KANDM_PASSWORD;
        response = await orderFromKAndM(page, websiteUrl, storeNumber, itemNumber, quantity, username, password, poNumber, pickup);
        break;
      case 'TIRERACK':
        websiteUrl = decryptedValues.TIRERACK_URL;
        const storeInt = parseInt(storeNumber);
        if (storeInt < 1000) {
          username = decryptedValues.TIRERACK_USERNAME_MAVISCORP;
          password = decryptedValues.TIRERACK_PASSWORD_MAVISCORP;
        } else if (storeInt <= 1300) {
          username = decryptedValues.TIRERACK_USERNAME_UPPERCASE;
          password = decryptedValues.TIRERACK_PASSWORD_UPPERCASE;
        } else {
          username = decryptedValues.TIRERACK_USERNAME_LOWERCASE;
          password = decryptedValues.TIRERACK_PASSWORD_LOWERCASE;
        }
        response = await orderFromTireRack(page, websiteUrl, storeNumber, itemNumber, quantity, username, password, poNumber, pickup);
        break;
      default:
        throw new Error('Invalid vendor');
    }
    await browser.close();
    res.json(response);
};

module.exports = { runAutomation };
