import { ClientsModel } from "../models/clients-model";
import { Gender } from "../models/gender-model";
import * as HttpResponse from "../utils/http-helper";

const CLIENT_TEST = [
    {   client_id: 1,
        first_name: "Bruno",
        last_name: "Simon",
        gender: Gender.Male,
        birth_date: Date,
        e_mail: "teste@teste.com",
        phone: "19821212",
        address_street: "Rua Teste",
        address_number: "666",
        address_neighborhood: "Bairro Caos",
        address_city: "Caos City",
        address_state: "SP",
        zip_code: "1698741",
        number_of_tattoos: 20,
        first_client: false,
        fav_style: "Old School",
        allergies: "Fritura",
        last_tattoo_date: Date,
        registration_date: Date,
    }
]

export const getClientService = async () => {
    const data = CLIENT_TEST
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
} 