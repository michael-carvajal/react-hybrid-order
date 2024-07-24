// const body = document.querySelector("body");

// const newButton = document.createElement("button");

// newButton.innerText = "Hybrid Source";

// body.appendChild(newButton);

function vendorSwitchCase(vendor) {
  switch (vendor) {
    case "ATD Secondary":
      vendor = "ATD";
      break;
    case "ATD Direct":
      vendor = "ATD";
      break;
    case "ATD-LOCAL":
      vendor = "ATD";
      break;
    case "ATD-LOCALPLUS":
      vendor = "ATD";
      break;
    case "NTW":
      vendor = "NTW";
      break;
    case "TireHub":
      vendor = "TIREHUB";
      break;
    case "Tire Rack":
      vendor = "TIRERACK";
      break;
    case "Max Finkelstein":
      vendor = "MFI";
      break;
    case "FINKELSTEIN":
      vendor = "MFI";
      break;
    case "K & M Tire":
      break;
    case "US Autoforce":
      vendor = "USA";
      break;
    case "Gateway":
      break;
    case "US_AUTOFORCE":
      vendor = "USA";
      break;

    default:
      break;
  }
  return vendor;
}

let itemNumber = document.getElementById("txtitem").value.trim();
let poNumber = document.getElementById("txtPoNumber").value.trim();
let quantity = document.getElementById("txtquantity").value.trim();
let vendor = document.getElementById("cboVendor").value.trim();

vendor = vendorSwitchCase(vendor);
const storeNumber = poNumber.split("-")[0];

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
    pickup: false, // TODO: add pickup option
    tireRackAccount: "MavisCorp",
  }),
});
const data = await response.json();
const confirmation = data.confirmation;
const referenceNum = confirmation[0].split(" ").at(-1);

const usAutoForcePrice = (vendor) =>
  vendor === "USA" ? confirmation[1].trim().split(" ").at(-1) : "";

let unitPrice = usAutoForcePrice(vendor);

const txtPrice = document.getElementById("txtPrice");
txtPrice.value = unitPrice;
const txtorderReference = document.getElementById("txtorderReference");
txtorderReference.value = referenceNum;
