const controller = require("../controllers/pedidos")
const controllerAuth = require ("../controllers/auth");

module.exports = function(app){ 
    app.post("/users/signin", controllerAuth.logar);
    app.use("/users", controllerAuth.checar);
    
    app.post("/realizarpedido", controller.realizarPedido);
    app.get("/pedidos/:id", controller.buscarPedidoPorId);
    app.delete("/cancelarpedido/:id", controller.cancelarPedido);
}