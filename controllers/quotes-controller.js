import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getQuotes = async (_req, res) => {
    try {
        const data = await knex('quotes');
        res.json(data);
    }
    catch(error) {
        console.error(error);
    }
}

export {
    getQuotes
}