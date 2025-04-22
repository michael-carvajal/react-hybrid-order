const capitalTireShipToMap = require("./getStoreShipToNumber");

async function login(username, password, page) {
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.keyboard.press('Enter');
}

async function chooseStore(storeNumber, page) {
    const shipToNumber = capitalTireShipToMap[storeNumber];
    await page.getByText(shipToNumber).click()
}

async function orderFromCapitalTire(
    page,
    url,
    storeNumber,
    itemNumber,
    quantity,
    username,
    password,
    poNumber,
    pickup
  ){
    await page.goto(url);
    await login(username, password, page);
    await chooseStore(storeNumber, page);
  }

  module.exports = orderFromCapitalTire;    