// const body = document.querySelector("body");

// const newButton = document.createElement("button");

// newButton.innerText = "Hybrid Source";

// body.appendChild(newButton);

let itemNumber = document.getElementById("itemNumber").value;
let poNumber = document.getElementById("poNumber").value;
let quantity = document.getElementById("quantity").value;
let vendor = document.getElementById("vendor").value;

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
    pickup : false, // TODO: add pickup option
    tireRackAccount: "MavisCorp",
  }),
});
const data = await response.json();
console.log(data);
