import express from "express";
import dotenv from "dotenv";
import "colors";
import mongoose from "mongoose";
import cors from "cors";

// @midlewares
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// @connection
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Databse is Connected Sucessfully".bgGreen.bold);
  })
  .catch((error) => {
    console.log("Databse Error Occured".bgRed.bold);
  });

// routes
import routes from "./routes/userRoutes.js";
app.use("/api", routes);

// @Server Initilization
app.listen(process.env.PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server is Connected To ${process.env.PORT}`.bgBlue.bold);
});
