import { Address } from "./address";

export class Billing{
    name: string;
    address:Address = new Address();

    constructor(name='xxx', address= new Address()){
        this.name = name;
        this.address = address;
    }

}
