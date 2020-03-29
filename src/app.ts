import express, { Application } from 'express';
import morgan from 'morgan';

// Routes

import ApiRoute from './routes/api_routes';


export class App {

    private app: Application;
    private cors = require('cors')({ origin: true });
    private bodyParser = require("body-parser");

    constructor(private port?: number | string) {
        this.app = express();
        this.app.use(this.cors);
        this.app.use(this.bodyParser.json());
        this.app.use(this.bodyParser.urlencoded({
            extended: true
        }));
        this.settings();
        this.middlewares();
        this.routes();

    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', ApiRoute);
    }


    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}