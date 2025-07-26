import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findUserByUsername } from "../repositories/auth-repository";
import dotenv from "dotenv";
import * as HttpResponse from "../utils/http-helper"

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET as string;

export const loginService = async (username: string, password: string) => {
    const user = await findUserByUsername(username);
    const validPassword = await bcrypt.compare(password, user!.password_hash);
    let response = null;

    if (!user || !validPassword) {
        response = await HttpResponse.unauthorized();
    }

    const token = jwt.sign({
        user_id: user!.user_id,
        username: user!.username,
    }, SECRET_KEY, {
        expiresIn: "7d",
    });

    return {
        statusCode: 200,
        body: { token },
    }
}