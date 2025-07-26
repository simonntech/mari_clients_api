import { Request, Response } from "express";
import * as Service from "../services/auth-service";

export const login = async (req:Request, res: Response) => {
    const {username, password} = req.body;
    const httpResponse = await Service.loginService(username, password);

    return res.status(httpResponse.statusCode).json(httpResponse.body);
}