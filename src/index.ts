// index.ts
import express from "express";
import { middleware } from "#middlewares/middlewares.js";

const app = express();
const port = process.env.PORT ?? "9001";

app.get("/", middleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
