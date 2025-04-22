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
    await page.locator('#WholesalePowerSearch').fill(itemNumber);
    await page.keyboard.press('Enter');
    
    await page.getByRole('button', {name : 'Order'}).click();
    for (let i = 0; i < quantity; i++) {
        await page.getByText('+', { exact: true }).click();
    }
    await page.locator('#viewcartmodal').click();
    await page.locator('#Ep2OrderCustomerPoNumber').fill(poNumber);
    
    if (pickup) {
        await page.locator('#Ep2OrderShipViaPICKUP').click();
    }
  }

  module.exports = orderFromCapitalTire;    