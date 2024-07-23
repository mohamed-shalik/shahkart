require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const order = require("./routes/order");
const Web3=require('web3');


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes   
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/order",order);



const port = process.env.PORT || 3080;
app.listen(port, console.log(`Listening on port ${port}...`));
