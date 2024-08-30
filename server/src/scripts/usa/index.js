async function login(username, password, page) {
  // Fill in the username
  await page.fill("#usernameTextBox", username);

  // Fill in the password
  await page.fill("#passwordTextBox", password);
  await page.getByRole("button").click();
  await page.getByRole("textbox");
}

async function searchForItem(page, itemNumber, quantity) {
  await page.fill("#tirepartField", itemNumber);
  await page.keyboard.press("Enter");
  try {
    // Check if the "0 Results For:" text is present
    const emptySearchResults = await page.waitForSelector(
      'text="0 Results For:"',
      { timeout: 1000 }
    );
    if (emptySearchResults) {
      throw new Error(`Cannot find item #${itemNumber}`);
    }
  } catch (error) {
    // If the element is not found within the timeout, it means the item was found
    if (error.name === "TimeoutError") {
      console.log(`Item #${itemNumber} found.`);
    } else {
      throw error;
    }
  }

  await page.getByText(/Primary Warehouse*/i).click();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.type(quantity);
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
}

async function orderFromUSA(
  page,
  url,
  storeNumber,
  itemNumber,
  quantity,
  username,
  password,
  poNumber,
  pickup
) {
  try {
    await page.goto(url);
    await login(username, password, page);
    await page.fill("#SelectDealerAutoComplete", storeNumber + " ");

    // Wait for the div elements containing the store numbers
    await page.waitForSelector("div.divSelectDealerResult");
    await page.waitForTimeout(500);

    // Use page.evaluate to find and click the exact store number
    const storeError = await page.evaluate((storeNumber) => {
      // Get all divs with the class 'divSelectDealerResult'
      const divs = document.querySelectorAll("div.divSelectDealerResult");
      // Convert NodeList to Array and find the exact match
      const exactDiv = Array.from(divs).find((div) => {
        const text = div.textContent || div.innerText;
        const regex = new RegExp(`^${storeNumber}(?=\\s|$)`);
        return regex.test(text.trim());
      });

      // Click on the exact match if found
      if (exactDiv) {
        exactDiv.click();
        return null;
      } else {
        return `Store ${storeNumber} could not be found`;
      }
    }, storeNumber);

    console.log("storeError in USA index ========>", storeError);

    // If storeError is not null, it means the store was not found
    if (storeError) {
      console.log(
        "storeError inside if statement in USA index ========>",
        storeError
      );
      throw new Error(storeError);
    }

    await searchForItem(page, itemNumber, quantity);
  } catch (error) {
    console.error("An error occurred: ===========>", error.message);
    return { error: error.message };
  }
  await page.fill("#inputPurchaseOrder", poNumber);
  if (pickup === true) {
    await page.getByLabel("Open").nth(1).click();
    await page.getByRole("option", { name: "​ Will Call" }).click();
  }

  // Wait for the confirmation page to load
  await page.waitForSelector("div p.text-green.pl-2");
  await page.waitForSelector("div.flex p span.block");

  // Extract the confirmation number
  const confirmationNumber = await page.textContent("div p.text-green.pl-2");
  const price = await page.textContent("div.flex p span.block");
  console.log(confirmationNumber, " -- $", price.slice(1));
  return {
    confirmation: {
      confirmationNumber: confirmationNumber.split(" ").at(-1),
      eta: pickup ?? "Order set for will call",
      cost: price.slice(1),
    },
  };
}

module.exports = orderFromUSA;
