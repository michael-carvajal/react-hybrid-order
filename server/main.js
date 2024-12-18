const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const server = require(path.join(__dirname, "src", "server"));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 360,
    height: 715,
    icon: path.join(__dirname, "src", "images", "appIcon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadFile("./dist/index.html");
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  // Load the context menu
  (async () => {
    const contextMenu = (await import("electron-context-menu")).default;

    contextMenu({
      labels: { copy: "Copy", paste: "Paste" },
    });
  })();
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

server.listen(5000, () => {
  console.log("Express server running on http://localhost:5000");
});

ipcMain.handle("run-automation", async (event, args) => {
  const {
    vendor,
    storeNumber,
    itemNumber,
    poNumber,
    quantity,
    pickup,
    tireRackAccount,
    isAllVendors,
  } = args;
  if (isAllVendors) {
    const vendors = ["NTW", "TIREHUB", "TIRERACK", "ATD", "USA", "MFI"];
    const storeNumber = poNumber.split("-")[0];

    try {
      const requests = vendors.map((vendor) => {
        return fetch("http://localhost:5000/api/automation/run", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vendor,
            storeNumber,
            itemNumber,
            poNumber,
            quantity,
            pickup,
            tireRackAccount,
          }),
        }).then((response) => response.json());
      });

      const results = await Promise.all(requests);
    } catch (error) {
      console.log(error);
    }
    return;
  }
  const response = await fetch("http://localhost:5000/api/automation/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vendor,
      storeNumber,
      itemNumber,
      poNumber,
      quantity,
      pickup,
      tireRackAccount,
    }),
  });
  const data = await response.json();
  console.log(data);
});
