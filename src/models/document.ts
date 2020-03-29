export class DocumentModel {
    type: string;
    number: string;


    constructor(type = 'cpf', number = '30621143049') {
        this.type = type;
        this.number = number;
    }

}
