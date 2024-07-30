const getStoreId = require("./getStoreId");

async function login(username, password, page) {
  await page.getByLabel("Email address:", { exact: true }).fill(username);
  await page.getByLabel("Password:").fill(password);
  await page.getByRole("button", { name: "Sign in" }).click();
}

async function orderFromKAndM(
  page,
  url,
  storeNumber,
  itemNumber,
  quantity,
  username,
  password,
  poNumber,
) {
  await page.goto(url);
  await login(username, password, page);
  const storeCode = getStoreId(storeNumber);
  await page.getByRole("button", { name: "MAVIS #" }).hover();
  await page.getByRole("textbox", { name: "Search..." }).fill(storeCode);
  const storeLinks = await page.locator(`text=/${storeCode}/i`).all();
  await storeLinks[0].click();

  await page.waitForTimeout(1000);
  await page.getByLabel("Part Number").fill(itemNumber);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  await page.locator("#tireSearchTable .cartContainer .qty.m-1").fill(quantity);
  await page.keyboard.press("Enter");
  await page.locator("#poNum").fill(poNumber);
}

module.exports = orderFromKAndM;