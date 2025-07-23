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


export const getClientByIdService = async (id: Number) => {
    const data = await ClientsRepository.findClientById(id);
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
} 


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


export const udpateClientService = async (id: Number, client: ClientsModel) => {
    const data = await ClientsRepository.findAndModifyClient(id, client);
    let response = null;

    if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
} 


export const deleteClientService = async (id: Number) => {
    const isDeleted = await ClientsRepository.findAndDeleteClient(id);
    let response = null;

    if(isDeleted) {
        response = await HttpResponse.ok({message: "client deleted"});
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
}