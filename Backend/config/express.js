// Exportando módulo (PadrãoCommonJS)
module.exports = function () {
    let app = express ();
    //Definindo variável de aplicação
    app.set("port",8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static("./public"));
    routerUsers(app);
    routerPedidos(app);
    routerReviews(app);
    routerFaqs(app);
    return app;
}

// Importando módulo express (Padrão CommonJS)
const express = require ('express');
const routerUsers = require("../api/routes/users")
const routerPedidos = require("../api/routes/pedidos");
const routerReviews = require("../api/routes/reviews")
const routerFaqs = require("../api/routes/faqs");
const bodyParser = require('body-parser');

// Exportando módulo (PadrãoCommonJS)
module.exports = function () {
    let app = express ();
    //Definindo variável de aplicação
    app.set("port",8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static("./public"));
    routerUsers(app);
    routerPedidos(app);
    routerReviews(app);
    routerFaqs(app);
    return app;
}
