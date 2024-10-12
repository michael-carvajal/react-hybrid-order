const { ConnectionPool } = require("mssql");
const sql = require("mssql");
// Configure your SQL Server connection
const dbConfig = {
  server: "SERVER3",
  database: "ShuttleNew",
  user: "AutomatedSourcingApp",
  password: "bnRmuClLWlRmhQNP8U0bZ86Y3",
  options: {
    encrypt: true, // if you're using Azure, otherwise false
    trustServerCertificate: true, // set true for self-signed certificates
  },
};
// Example route to fetch data
const fetchQueueData = async (req, res) => {
  try {
    const pool = new ConnectionPool(dbConfig);
    await pool.connect();

    // Write your SQL query
    const result = await pool
      .request()
      .query(
        `SELECT * FROM ShuttleNew.dbo.vw_SourcingRequestQueue ORDER BY (CASE WHEN Store in (2083,2084,2085,2086,1215,1219,1225,1216,1223,1221,1218,1224,1217,1222,1226,1220) THEN '2' else '1' END) desc, CASE WHEN DepositId IS NULL THEN 0 ELSE 1 END DESC, RequestedDeliveryDate ASC, RequestedDeliveryTime DESC`
      );

    // Send the result as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Internal Server Error");
  }
};
const login = async (req, res) => {
  try {
    const empNum = req.body.empNum;

    const pool = new ConnectionPool(dbConfig);
    await pool.connect();
    const sql = `SELECT Count(*) as count FROM ShuttleNew.dbo.tbl_request_queue_source_users WHERE empNum=${empNum}`;
    const result = await pool.request().query(sql);
    console.log(result);

    res.json(result.recordset[0].count);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Internal Server Error");
  }
};
const orderStatus = async (req, res) => {
  try {
    const { workorder, store } = req.body;

    // Determine which field to filter by (either 'workorder' or 'store')
    const filterBy = workorder ? "workorder" : "store";
    const filterValue = workorder || store; // The actual value to search for

    if (!filterValue) {
      return res.status(400).send("No workorder or store provided.");
    }

    // Log to check filterValue is correctly defined
    console.log("filterValue:", filterValue);

    const pool = new sql.ConnectionPool(dbConfig);
    await pool.connect();

    // Validate filterBy to avoid SQL injection risks
    const validColumns = ["workorder", "store"];
    if (!validColumns.includes(filterBy)) {
      return res.status(400).send("Invalid filter column");
    }

    // Parameterized SQL query (use @filterValue for the parameter)
    const query = `
      SELECT s.*, m.avg_cost_invoice as averageCost 
      FROM ShuttleNew.dbo.tbl_request_queue_source s 
      LEFT JOIN edi.dbo.sequal_inv_mas m ON s.item = m.Alpha_Item_Number 
      WHERE s.${filterBy} = @filterValue`;

    // Prepare and execute the query using parameterized input
    const result = await pool
      .request()
      .input("filterValue", sql.NVarChar, filterValue) // Ensure this matches the data type in SQL
      .query(query);

    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { fetchQueueData, login, orderStatus };
