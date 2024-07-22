const orderFromATD = require("../scripts/atd");
const orderFromMFI = require("../scripts/mfi");
const orderFromUSA = require("../scripts/usa");
const orderFromNTW = require("../scripts/ntw");
const orderFromTirehub = require("../scripts/tirehub");
const orderFromKAndM = require("../scripts/kandm");
const orderFromTireRack = require("../scripts/tirerack");


const orderFromVendor = async (
  decryptedValues,
  page,
  storeNumber,
  itemNumber,
  quantity,
  vendor,
  poNumber,
  pickup,
  tireRackAccount
) => {
  let websiteUrl, username, password, response;
try {
    
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
      break;

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
      break;
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
      break;

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
      break;
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
      break;
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
      } else if (tireRackAccount === "a531156") {
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
      break;
    default:
      console.log("Invalid vendor. Please choose either 'ATD' or 'other'.");
      throw new Error("Invalid vendor");
  }
} catch (error) {
    console.log(error);
}

  return response;
};

module.exports = orderFromVendor;
