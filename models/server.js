const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion


        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //lectura y parseio del body 
        this.app.use(express.json());
        //Direcctorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servicor correindo en puerto', this.port);;
        })
    }

}


module.exports = Server;