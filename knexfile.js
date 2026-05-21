// Import dotenv to process environment variables from `.env` file.
import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // utf8mb4 is required for 4-byte characters such as emoji.
    charset: "utf8mb4",
  },
};