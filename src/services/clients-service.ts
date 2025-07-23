import { ClientsModel } from "../models/clients-model";
import * as ClientsRepository from "../repositories/clients-repository";
import * as HttpResponse from "../utils/http-helper";


export const getClientService = async () => {
    const data = await ClientsRepository.findAllClients();
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
};

export const createClientService = async (client: ClientsModel) => {
    let response = null;

    if (Object.keys(client).length !== 0) {
        await ClientsRepository.insertClient(client);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
}