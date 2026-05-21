import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);
const MAX_REFLECTION_LENGTH = 2000;

const getDefault = async(_req, res) => {
    try {
        const defaultData = await knex('reflections').first();
        res.status(200).json(defaultData);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to load the default reflection right now."
        });
    }
}

const getAll = async(_req, res) => {
    try {
        const defaultData = await knex('reflections');
        res.status(200).json(defaultData);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to load reflections right now."
        });
    }
}

const post = async(req, res) => {
    try {
        if(typeof req.body !== 'object') {
            return res.status(400).json({
                message: "Please enter a valid message in JSON format."
            });
        }

        const message = typeof req.body.message === "string" ? req.body.message.trim() : "";
        const name = typeof req.body.name === "string" ? req.body.name.trim() : "";

        if (!message) {
            return res.status(400).json({
                message: "Please enter a reflection before submitting."
            });
        }

        if (message.length > MAX_REFLECTION_LENGTH) {
            return res.status(400).json({
                message: `Please keep your reflection under ${MAX_REFLECTION_LENGTH} characters.`
            });
        }

        const payload = {
            message,
        };

        if (name) {
            payload.name = name;
        }

        const updateData = await knex('reflections').insert(payload);
        const newPost = updateData[0];

        const result = await knex("reflections").where({id: newPost}).first();
        res.status(201).json({
            message: "your reflection has been shared",
            data: result,
        });
    }
    catch(error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to save reflection right now."
        });
    }
}

export {
    getDefault,
    getAll,
    post
}
