import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getDefaultReflection = async(_req, res) => {
    try {
        const defaultData = await knex('reflections')
            .first();
        res.status(200).json(defaultData);
    }
    catch(error) {
        console.error(error);
    }
}

const getAllReflections = async(_req, res) => {
    try {
        const defaultData = await knex('reflections');
        res.status(200).json(defaultData);
    }
    catch(error) {
        console.error(error);
    }
}

export {
    getDefaultReflection,
    getAllReflections
}