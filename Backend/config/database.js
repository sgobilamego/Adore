//config/database.js

const mongoose = require ('mongoose'); { useNewUrlParser: true }

module.exports = function (uri){
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true} );
    mongoose.connection.on('connected', function() {
        console.log('Mongoose! Conectado em: '+ uri);
    });

    mongoose.connection.on('disconnected', function () {
    console.log('Mongoose! Desconectado de: '+ uri);
    });

    mongoose.connection.on('error', function (erro) {
    console.log('Mongoose! Erro na conexão: ' + erro);
    });

    mongoose.set('debug',true); 
}


