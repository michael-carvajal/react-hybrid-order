

async function orderFromTDG(
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
    await page.locator('input[name="customer_id"]').click();
    await page.locator('input[name="customer_id"]').fill("MAVIS" + storeNumber);
    await page.locator('#login-pass').click();
    await page.locator('#login-pass').fill(password);
    await page.locator('#login-btn').click();
  }

  module.exports = orderFromTDG;    