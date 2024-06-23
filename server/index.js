// server/index.js
const express = require('express');
const { chromium } = require('playwright');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/run-automation', async (req, res) => {
  const { vendor, itemNumber, poNumber, quantity, pickup } = req.body;
  
  let browser;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://github.com/michael-carvajal/hybrid_order/blob/main/src/atd/index.js");
    // await login(username, password, page);
    // Use your Playwright automation code here
    // Example: await page.goto('http://example.com');

    // await browser.close();
    res.json({ success: true });
  } catch (error) {
    if (browser) await browser.close();
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
