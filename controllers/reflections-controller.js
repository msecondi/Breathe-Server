import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getDefault = async(_req, res) => {
    try {
        const defaultData = await knex('reflections')
            .first();
        res.status(200).json(defaultData);
    }
    catch(error) {
        console.error(error);
    }
}

const getAll = async(_req, res) => {
    try {
        const defaultData = await knex('reflections');
        res.status(200).json(defaultData);
    }
    catch(error) {
        console.error(error);
    }
}

const post = async(req, res) => {
    try {
        if(!req.body.message) {
            return res.status(400).json({
            message: "Please enter a message"
          });
        }
        const updateData = await knex('reflections').insert(req.body);
        const newPost = updateData[0];

        const result = await knex("reflections").where({id: newPost})
        console.log(result)
        res.status(200).send(result);
    }
    catch(error) {
        console.error(error);
        res.status(400).send("ERROR");
    }
}

export {
    getDefault,
    getAll,
    post
}