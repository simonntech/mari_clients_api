import { Gender } from "./gender-model";

export interface ClientsModel {
    client_id: number;
    first_name: string;
    last_name: string;
    gender: Gender;
    birth_date: Date;
    social_media: string;
    phone: string;
    address_street: string;
    address_number: string;
    address_neighborhood: string;
    address_city: string;
    address_state: string;
    zip_code: string;
    number_of_tattoos: number;
    is_first_client: boolean;
    fav_style: string;
    allergies: string;
    last_tattoo_date: Date;
    registration_date: Date
}