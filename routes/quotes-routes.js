import initKnex from "knex";
import configuration from "../knexfile.js";

import express from "express";

const knex = initKnex(configuration);
const quoteRouter = express.Router();

quoteRouter.route('/')
    .get(async (req, res) => {
    try {
        const data = await knex('quotes');
        res.json(data);
    }
    catch(error) {
        console.error(error);
    }
})

export default quoteRouter;