import { ClientsModel } from "../models/clients-model";
import { Gender } from "../models/gender-model";

export const CLIENTS_TEST: ClientsModel[] = [
    {   client_id: 1,
        first_name: "Bruno",
        last_name: "Simon",
        gender: Gender.Male,
        birth_date: new Date("1990-06-30"),
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
        last_tattoo_date: new Date("2025-05-01"),
        registration_date: new Date(),
    },
    {
        client_id: 2,
        first_name: "Marina",
        last_name: "Oliveira",
        gender: Gender.Female,
        birth_date: new Date("1987-03-15"),
        e_mail: "marina.oliveira@example.com",
        phone: "11988776655",
        address_street: "Av. Central",
        address_number: "123",
        address_neighborhood: "Centro",
        address_city: "São Paulo",
        address_state: "SP",
        zip_code: "01010000",
        number_of_tattoos: 5,
        first_client: true,
        fav_style: "Minimalista",
        allergies: "Nenhuma",
        last_tattoo_date: new Date("2025-07-10"),
        registration_date: new Date(),
    },
    {
        client_id: 3,
        first_name: "Carlos",
        last_name: "Pereira",
        gender: Gender.Male,
        birth_date: new Date("1995-11-02"),
        e_mail: "carlos.pereira@example.com",
        phone: "11999887766",
        address_street: "Rua das Flores",
        address_number: "456",
        address_neighborhood: "Jardins",
        address_city: "Campinas",
        address_state: "SP",
        zip_code: "13025000",
        number_of_tattoos: 8,
        first_client: false,
        fav_style: "Realismo",
        allergies: "Látex",
        last_tattoo_date: new Date("2025-06-20"),
        registration_date: new Date(),
    },
    {
        client_id: 4,
        first_name: "Letícia",
        last_name: "Ferraz",
        gender: Gender.Female,
        birth_date: new Date("1992-09-22"),
        e_mail: "leticia.ferraz@example.com",
        phone: "11977665544",
        address_street: "Rua do Sol",
        address_number: "789",
        address_neighborhood: "Parque Luz",
        address_city: "Ribeirão Preto",
        address_state: "SP",
        zip_code: "14025000",
        number_of_tattoos: 2,
        first_client: true,
        fav_style: "Fine Line",
        allergies: "Antibiótico",
        last_tattoo_date: new Date("2025-07-15"),
        registration_date: new Date(),
    },
    {
        client_id: 5,
        first_name: "Diego",
        last_name: "Souza",
        gender: Gender.Male,
        birth_date: new Date("1984-01-10"),
        e_mail: "diego.souza@example.com",
        phone: "11966554433",
        address_street: "Av. das Palmeiras",
        address_number: "321",
        address_neighborhood: "Zona Sul",
        address_city: "Santos",
        address_state: "SP",
        zip_code: "11030000",
        number_of_tattoos: 12,
        first_client: false,
        fav_style: "Tribal",
        allergies: "Tinta vermelha",
        last_tattoo_date: new Date("2025-07-01"),
        registration_date: new Date(),
    }
];

export const findAllClients = async (): Promise<ClientsModel[]> => {
    return CLIENTS_TEST;
}

export const findClientById = async (client_id: Number): Promise<ClientsModel | undefined> => {
    return CLIENTS_TEST.find(client => client.client_id === client_id)
} 

export const insertClient = async (client: ClientsModel) => {
    CLIENTS_TEST.push(client);
}

export const findAndModifyClient = async (client_id: Number, client: ClientsModel): Promise<ClientsModel> => {
    const clientIndex = CLIENTS_TEST.findIndex(client => client.client_id === client_id);

    if ( clientIndex !== -1) {
        CLIENTS_TEST[clientIndex] = client;
    }

    return CLIENTS_TEST[clientIndex];
}

export const findAndDeleteClient = async (client_id: Number):Promise<Boolean> => {
    const index = CLIENTS_TEST.findIndex(client => client.client_id === client_id);

    if (index !== 1) {
        CLIENTS_TEST.splice(index, 1);
        return true;
    }

    return false;
}