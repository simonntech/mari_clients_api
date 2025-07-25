import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findUserByUsername } from "../repositories/auth-repository";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET as string;

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);
    if (!user) {
        return res.status(401).json({message: "User not found or password is incorrect"});
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if(!validPassword) {
        return res.status(401).json({message: "User not found or password is incorrect"});
    }

    const token = jwt.sign({
        user_id: user.user_id,
        username: user.username
    }, SECRET_KEY, {
        expiresIn: "7d",
    });

    return res.status(200).json({token});

}