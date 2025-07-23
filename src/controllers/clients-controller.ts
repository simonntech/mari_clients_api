import { Request, Response } from "express";
import * as Service from "../services/clients-service";
import { ClientsModel } from "../models/clients-model";

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

export const updateClient = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue:ClientsModel = req.body;
    const httpResponse = await Service.udpateClientService(id, bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body);
} 