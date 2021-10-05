const controller = require("../controllers/users")
const controllerAuth = require ("../controllers/auth");

module.exports = function(app){
    app.post("/cadastro", controller.inserirUser);
    app.post("/login", controllerAuth.logar);
   
    app.use("/users", controllerAuth.checar);
    app.get("/allusers", controller.listarUsers); 
    app.get("/users/:id", controller.buscarUserPorId);
    app.delete("/users/:id", controller.removerUser);
}