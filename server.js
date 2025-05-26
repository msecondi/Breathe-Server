import "dotenv/config";
import express from "express";
import cors from "cors"
const app = express();

const PORT = process.env.PORT || 5050;

import quoteRouter from "./routes/quotes-routes.js";
import reflectionRouter from "./routes/reflections-routes.js";
import fireFeedRouter from "./routes/fire-feed-routes.js";

//middleware
app.use(express.json());

//cors
app.use(cors());

app.use("/quotes", quoteRouter);
app.use("/reflections", reflectionRouter);
app.use("/fire-feed", fireFeedRouter);

app.listen(PORT, () => {
  console.log(`App now running at http://localhost:${PORT}`);
});