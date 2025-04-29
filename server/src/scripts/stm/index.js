
async function orderFromSTM(
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
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
      });
      await page.goto('https://stm.tireweb.com/Logon/Login', { waitUntil: 'domcontentloaded' }); // Adjust waitUntil as needed

    // await page.goto(url);
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await sleep(Math.random() * 500 + 200); // Random delay between 200ms and 700ms
await page.getByRole('textbox', { name: 'Username' }).fill('mavis1225');
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill('mavis1225');
// await page.getByRole('textbox', { name: 'Password' }).press('Enter');
      await sleep(5000)
  }
  module.exports = orderFromSTM;    