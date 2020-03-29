import { Billing } from "./billing";
import { Customer } from "./customer";
import { Item } from "./item";

export class CardModel{
    card_number: string;
    card_holder_name: string;
    card_expiration_date:string;
    card_cvv:string
    amount:number;
    billing:Billing;
    items:Array<Item>;
    customer:Customer;
    constructor(card_number='', card_holder_name='', card_expiration_date='', card_cvv='', amount=0,billing= new Billing(), items = [], customer= new Customer()){
        this.card_number = card_number;
        this.card_holder_name = card_holder_name;
        this.card_expiration_date = card_expiration_date;
        this.card_cvv = card_cvv;
        this.amount = amount;
        this.billing = billing;
        this.items = items;
        this.customer = customer;
    }


    toMap(json:any){
        let card = new CardModel();
        card.amount = json["amount"];
        card.card_number = json["card_number"];
        card.card_cvv = json["card_cvv"];
        card.card_expiration_date = json["card_expiration_date"];
        card.card_holder_name = json["card_holder_name"];
        return card;
    }
}