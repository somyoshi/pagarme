import { Request, Response } from 'express'
import { ApiDAO } from '../../src/dao/apiDAO';
const axios = require('axios')

export class ApiController {


    async processaPagamento(req: Request, res: Response) {

        res.send((await ApiDAO.processaPagamento(req)));

    }

}

