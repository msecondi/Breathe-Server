import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

import quoteRouter from "./routes/quotes-routes.js";

// basic home route
app.use("/quotes", quoteRouter);

app.listen(PORT, () => {
  console.log(`App now running at http://localhost:${PORT}`);
});