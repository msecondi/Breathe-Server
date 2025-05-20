import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// GET today's burn count
const getCount = async (_req, res) => {
  try {
    //format date to align with MySQL
    const today = new Date().toISOString().split("T")[0];

    const result = await knex("burn_count")
      .where({ date: today })
      .first();

    //count: 0 if no entries, otherwise send count
    res.status(200).json({ count: result ? result.count : 0 });
  } catch (error) {
    console.error("Error getting count:", error);
    res.status(500).json({ error: "Failed to retrieve count" });
  }
};

// POST a burn event (increment today's count or insert new row)
const burnWorries = async (_req, res) => {
  try {
    //format date to align with MySQL
    const today = new Date().toISOString().split("T")[0];

    const existing = await knex("burn_count").where({ date: today }).first();
    
    //if entries have already been inputted
    if (existing) {
      // increment today's count
      await knex("burn_count")
        .where({ date: today })
        .increment("count", 1);
    } else {
      // insert new row for today since this is the first entry
      await knex("burn_count").insert({ date: today, count: 1 });
    }

    res.status(201).json({ success: "Released into the flame." });
  } catch (error) {
    console.error("Error inserting burn event:", error);
    res.status(500).json({ error: "Failed to burn worries" });
  }
};

export { 
    getCount, 
    burnWorries 
};
