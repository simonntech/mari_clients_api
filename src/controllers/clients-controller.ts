import { Request, Response } from "express";
import { getClientService } from "../services/clients-service";

export const getClients = async (req: Request, res: Response) => {
    const httpResponse = await getClientService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}