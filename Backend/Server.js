const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./Routes/TodoRoutes")

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 7000;

// MiddleWere
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongodb is connact"))
.catch((err) => console.log(err))


app.use("/api", routes)


app.listen(PORT, () => console.log(`Listen at ${PORT}...`));
