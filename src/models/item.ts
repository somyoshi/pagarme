export class Item{
    id:string;
    title:string;
    unit_price:number;
    quantity:number;
    tangible:boolean;

    constructor(id='', title='', unit_price=0, quantity=0, tangible=true){
        this.id = id;
        this.title = title;
        this.unit_price = unit_price;
        this.quantity = quantity;
        this.tangible = tangible;
    }
    
}
