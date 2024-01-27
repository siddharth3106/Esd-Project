const cors = require("cors");
const { connectDatabase } = require("./db/connection.js");
const userRoute = require("./routes/userRoute.js");
const transactionRoute = require("./routes/transactionRoute.js");
const PORT = 4000 || 3000;
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/transactions", transactionRoute);
app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});
