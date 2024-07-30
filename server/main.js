const { app, BrowserWindow } = require("electron");
const path = require("path");
const server = require(path.join(__dirname, "src", "server"));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "src", "images", "appIcon.png"),
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    },
  });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
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
