import express from "express";
import * as quoteController from "../controllers/quotes-controller.js";

const quoteRouter = express.Router();

quoteRouter.route('/')
    .get(quoteController.getQuotes)

export default quoteRouter;