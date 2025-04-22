

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
    await page.locator('input[name="customer_id"]').fill('500531');
    await page.locator('#login-pass').click();
    await page.locator('#login-pass').fill('M@vi$T!r3');
    await page.locator('#login-btn').click();
  }

  module.exports = orderFromTDG;    