import { POOL } from "../controllers/db";
import { UserModel } from "../models/user-model";

export const findUserByUsername = async (username: string): Promise<UserModel | null> => {
    const result = await POOL.query("SELECT * FROM users WHERE username = $1", [username]);
    return result.rows[0] || null;
}