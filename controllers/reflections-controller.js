import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);
const MAX_REFLECTION_LENGTH = 2000;

const ALLOWED_REFLECTION_MODES = [
    "neutral",
    "release",
    "replenish",
    "absorb"
]

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
        if(!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
            return res.status(400).json({
                message: "please enter a valid message in JSON format"
            });
        }

        const message = typeof req.body.message === "string" ? req.body.message.trim() : "";
        const name = typeof req.body.name === "string" ? req.body.name.trim() : "";
        //default to "neutral" if user does not submit with a mode selected.
        const mode = typeof req.body.reflection_mode === "string" ? req.body.reflection_mode.trim().toLowerCase() : "neutral";

        if (!message) {
            return res.status(400).json({
                message: "please enter a reflection before submitting"
            });
        }

        if (message.length > MAX_REFLECTION_LENGTH) {
            return res.status(400).json({
                message: `please keep your reflection under ${MAX_REFLECTION_LENGTH} characters`
            });
        }

        const payload = {
            message,
        };

        if (name) {
            payload.name = name;
        }
        if (ALLOWED_REFLECTION_MODES.includes(mode)) {
            payload.reflection_mode = mode;
        } else {
            return res.status(400).json( {
                message: "please select a valid mode for reflection"
            });
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
            message: "unable to save reflection right now"
        });
    }
}

export {
    getDefault,
    getAll,
    post
}
