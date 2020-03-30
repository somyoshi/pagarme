const pagarme = require('pagarme');

export async function connect(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        pagarme.client.connect({ api_key: '#####' })
            .then((client:any) => resolve(client))
            //.then((transactions:any) => console.log(transactions))
            .catch((error:any) => console.error(error))
    }).catch((err:any) => console.log(err));

}
