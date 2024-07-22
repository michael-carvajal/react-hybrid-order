import React, { useState } from "react";

function Login({setIsLoggedIn}) {
  const [empNum, setEmpNum] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (empNum === "882339" || empNum === "29179" || empNum === "882322" || empNum === "11261") {
        setError("")
        setIsLoggedIn(true)
    }else {
        setError(`Employee ${empNum} not on file`)
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <input
          placeholder="Employee Number"
          onChange={(e) => setEmpNum(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
