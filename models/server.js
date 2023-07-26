const express = require('express');


class Server {
    constructor(){
        
        this.PORT = process.env.PORT
        this.app = express();
        this.usuariosPath = '/users';
        


        this.midlewares();
        this.routes();
    }

    midlewares() {
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.usuariosPath, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('Servidor corriendo en el puerto: ', this.PORT);
        })
    }

}


module.exports = Server