import {Pool} from "pg";
import dotenv from "dotenv";

dotenv.config();

export const POOL = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});