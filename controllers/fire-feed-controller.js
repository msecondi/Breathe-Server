import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// GET today's burn count
const getCount = async (_req, res) => {
  try {
    const result = await knex("introspective")
      .count("* as count")
      .whereRaw("DATE(created_at) = CURDATE()")
      .first();

    res.status(200).json({ count: result.count });
  } catch (error) {
    console.error("Error getting count:", error);
    res.status(500).json({ error: "Failed to retrieve count" });
  }
};

// POST a burn event
const burnWorries = async (_req, res) => {
  try {
    await knex("introspective").insert({ created_at: knex.fn.now() });

    res.status(201).json({ success: "Released into the flame." });
  } catch (error) {
    console.error("Error inserting burn event:", error);
    res.status(500).json({ error: "Failed to burn worries" });
  }
};

export {
  getCount,
  burnWorries,
};
