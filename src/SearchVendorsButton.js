import React from "react";

function SearchVendorsButton({ props, setError, setConfirmation }) {
  const { vendor, itemNumber, poNumber, quantity, pickup, tireRackAccount } =
    props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmation([]);
    setError([]);
    // console.log(vendor, itemNumber, poNumber, quantity, pickup);
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
          tireRackAccount,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else if (data.confirmation) {
        setConfirmation(data.confirmation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="btn btn-danger" onClick={handleSubmit}>
      Search All Vendors
    </button>
  );
}

export default SearchVendorsButton;
