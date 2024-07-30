import React from "react";

function SearchVendorsButton({ props, setError, setConfirmation }) {
  const { itemNumber, poNumber, quantity, pickup, tireRackAccount } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmation([]);
    setError([]);
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

      const errors = results.filter(result => result.error);
      const confirmations = results.filter(result => result.confirmation);

      if (errors.length > 0) {
        setError(errors.map(error => error.error));
      } 

      if (confirmations.length > 0) {
        setConfirmation(confirmations.map(confirmation => confirmation.confirmation));
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
