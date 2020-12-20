import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db/mongo";
import globalRouter from "../src/router/globalRouter";

const PORT = 7000;

const app = express();

app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

connect();

app.set("view engine", "pug");

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
