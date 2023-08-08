import express from "express";
import router from "./router";
import mongoose, { ConnectOptions, mongo } from "mongoose";

const app = express();
require("dotenv").config();
app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 3000;
const db_uri = process.env.DB_URI;

if (!db_uri) {
  console.error("DB_URI not set in environment variables.");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

mongoose
  .connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });
 
    