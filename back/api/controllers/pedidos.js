const Pedido = require ("../models/pedidos");
const view = require ("../views/pedidos");
const jwt = require("jsonwebtoken");

//a. POST: realiza a solicitação de pedido  
//a ideia de dividir em componentes é para separar no form, vamos ver se funfa, spoiler nao funfou
module.exports.realizarPedido = function(req, res){
    let pedido = {
        //parte a
        nome_destinatario: req.body.nome_destinatario,
        vinculo_destinatario: req.body.vinculo_destinatario,
        mensagem: req.body.mensagem,
        //parte b
        ingredientes: req.body.ingredientes,
        receita: req.body.receita,
        orcamento_disponivel: req.body.orcamento_disponivel,
        //parte c
        endereco_destinatario: req.body.endereco_destinatario,
        data_estimada: req.body.data_estimada,
        pagamento: req.body.pagamento,
    }

    let promise = Pedido.create(pedido)

    promise.then(function(pedido){
            res.status(201).json(view.render(pedido));
        }).catch(function(error){
            res.status(400).json({mensagem: "Vish, deu erro. Tente novamente."});
    });
}

//b. GET: busca e lista pedido com dado id

//consultar e rastrear torunou-se um só
module.exports.buscarPedidoPorId = function(req,res){
    let id = req.params.id;
    let promise = Pedido.findById(id).exec();
    promise.then(function(pedido){
        res.status(200).json(view.render(pedido));
    }).catch(function(error){
        res.status(400).json({mensagem: "Vish, sua requisição deu erro </3"});
    });
}

//c. DELETE: remover pedido com dado id
module.exports.cancelarPedido = function(req, res){
    let id = req.params.id;
    let promise = Pedido.findByIdAndDelete(id);
    promise.then(function(pedido){
        res.status(200).json(view.render(pedido));
    }).catch(function(error){
        res.status(400).json({mensagem: "Vish, não funfou :("});
    })
}
