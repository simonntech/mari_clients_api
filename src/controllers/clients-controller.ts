import { Request, Response } from "express";
import * as Service from "../services/clients-service";

export const getClients = async (req: Request, res: Response) => {
    const httpResponse = await Service.getClientService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postClient = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await Service.createClientService(bodyValue);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    };
}