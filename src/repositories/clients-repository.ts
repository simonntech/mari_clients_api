import { ClientsModel } from "../models/clients-model";
import { POOL } from "../config/db";

export const findAllClients = async (): Promise<ClientsModel[]> => {
    const result = await POOL.query("SELECT * FROM clients ORDER BY client_id ASC");
    return result.rows;
}

export const findClientById = async (client_id: Number): Promise<ClientsModel | undefined> => {
    const result = await POOL.query("SELECT * FROM clients WHERE client_id = $1", [client_id]);
    return result.rows[0];
}

export const insertClient = async (client: ClientsModel) => {
    const query = `
        INSERT INTO clients (
            first_name, last_name, gender, birth_date, social_media, phone, address_street, address_number, address_neighborhood, address_city, address_state, zip_code, number_of_tattoos, first_client, fav_style, allergies, last_tattoo_date, registration_date    
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18
         )
    `;

    const values = [
        client.first_name,
        client.last_name,
        client.gender,
        client.birth_date,
        client.social_media,
        client.phone,
        client.address_street,
        client.address_number,
        client.address_neighborhood,
        client.address_city,
        client.address_state,
        client.zip_code,
        client.number_of_tattoos,
        client.first_client,
        client.fav_style,
        client.allergies,
        client.last_tattoo_date,
        client.registration_date,
    ];

    await POOL.query(query, values);
}

export const findAndModifyClient = async (client_id: Number, client: ClientsModel): Promise<ClientsModel> => {
    const query = `
        UPDATE clients SET
            first_name = $1,
            last_name = $2,
            gender = $3,
            birth_date = $4,
            social_media = $5,
            phone = $6,
            address_street = $7,
            address_number = $8,
            address_neighborhood = $9,
            address_city = $10,
            address_state = $11,
            zip_code = $12,
            number_of_tattoos = $13,
            first_client = $14,
            fav_style = $15,
            allergies = $16,
            last_tattoo_date = $17,
            registration_date = $18
        WHERE client_id = $19
        RETURNING *;
    `;

    const values = [
        client.first_name,
        client.last_name,
        client.gender,
        client.birth_date,
        client.social_media,
        client.phone,
        client.address_street,
        client.address_number,
        client.address_neighborhood,
        client.address_city,
        client.address_state,
        client.zip_code,
        client.number_of_tattoos,
        client.first_client,
        client.fav_style,
        client.allergies,
        client.last_tattoo_date,
        client.registration_date,
        client_id,
    ];

    const result = await POOL.query(query, values);
    return result.rows[0];
}

export const findAndDeleteClient = async (client_id: Number): Promise<Boolean> => {
    const result = await POOL.query("DELETE FROM clients WHERE client_id = $1", [client_id]);
    return (result.rowCount as number) > 0;
}