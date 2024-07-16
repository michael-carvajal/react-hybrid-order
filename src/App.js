// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [vendor, setVendor] = useState("ATD");
  const [itemNumber, setItemNumber] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pickup, setPickup] = useState(false);
  const [error, setError] = useState([]);
  const [confirmation, setConfirmation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmation([]);
    setError([]);
    console.log(vendor, itemNumber, poNumber, quantity, pickup);
    const storeNumber = poNumber.split("-")[0];
    try {
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
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setError(data.error);
      }else if (data.confirmation) {
        setConfirmation(data.confirmation)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const Error = (
    <div>
      <p>{error[0]}</p>
    </div>
  );
  const Confirmation = (
    <ul>
      {confirmation.map((ele, key) => (
        <li key={`confirmation-key-${key}`}>{ele}</li>
      ))}
    </ul>
  );
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Hybrid Order</h3>
        </div>
        <div className="card-body">
          {error.length > 0 && Error}
          {confirmation.length > 0 && Confirmation}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="vendor" className="form-label">
                Vendor
              </label>
              <select
                className="form-select"
                id="vendor"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
              >
                <option value="ATD">ATD</option>
                <option value="MFI">Max Finkelstein</option>
                <option value="NTW">NTW</option>
                <option value="TIREHUB">Tirehub</option>
                <option value="TIRERACK">Tire Rack</option>
                <option value="USA">US Autoforce</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="itemNumber" className="form-label">
                Item Number
              </label>
              <input
                type="text"
                className="form-control"
                id="itemNumber"
                value={itemNumber}
                onChange={(e) => setItemNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="poNumber" className="form-label">
                Store/PO Number
              </label>
              <input
                type="text"
                className="form-control"
                id="poNumber"
                value={poNumber}
                onChange={(e) => setPoNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="pickup"
                checked={pickup}
                onChange={(e) => setPickup(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="pickup">
                Pick up
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
