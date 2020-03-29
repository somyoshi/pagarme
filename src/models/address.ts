export class Address{
    country: string;
    state:string;
    city:string;
    neighborhood:string;
    street:string;
    street_number:string;
    zipcode:string;

    constructor(country='br', state='Alagoas', city='Arapiraca', neighborhood='Complemento', street='Rua', street_number='570', zipcode='57207250'){
        this.country = country;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.street = street;
        this.street_number = street_number;
        this.zipcode =zipcode;
    }
}
