import { DocumentModel } from "./document";

export class Customer {
    external_id: string;
    name: string;
    type: string;
    country: string;
    email: string;
    phone_numbers: Array<any>;
    birthday: string;
    documents: Array<DocumentModel>;

    constructor(external_id = '1', name = '', type = 'individual', country = 'br', email = 'naoidentificado@gmail.com', phone_numbers = [], birthday = '1965-01-01', documents = []) {
        this.external_id = external_id;
        this.name = name;
        this.type = type;
        this.country = country;
        this.email = email;
        this.phone_numbers = phone_numbers;
        this.birthday = birthday;
        this.documents = documents;
    }


}





