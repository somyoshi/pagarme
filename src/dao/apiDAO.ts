import { Request } from 'express';
import { connect } from '../pagarme';
import { CardModel } from '../models/card';
import { DocumentModel } from '../models/document';
import { Item } from '../models/item';

export class ApiDAO {

    static processaPagamento(req: Request): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let card = new CardModel();
            card = card.toMap(JSON.parse(JSON.stringify(card.toMap(req.body))));
            card.items.push(new Item('1', 'Destaque', card.amount, 1, false));
            card.customer.phone_numbers.push("+5511999998888");
            card.customer.documents.push(new DocumentModel('cpf', '00000000000'))
            card.customer.name = card.card_holder_name
            connect().then(client => {
                client.transactions.create(
                    card
                ).then((transacation: any) => resolve(transacation["status"]))
                    .catch((err: any) => console.log(JSON.parse(JSON.stringify(err["response"]["errors"]))))
            }).catch(err => { console.log(err) })
        })

    }

}