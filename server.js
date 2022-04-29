const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //Init DB
        this.dbConnectionStart();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async dbConnectionStart() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        //Directorio publico del servidor
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/posts', require(`./routes/posts`));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Example app listening on port ', this.port);
        });
    }
}

module.exports = Server;