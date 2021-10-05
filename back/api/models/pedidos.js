const mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        nome_destinatario: {
            type: String,
            required: true
        },
        vinculo_destinatario: { 
            type:String,
            required: true
        },
        mensagem: { 
            type:String,
            required: true
        },
        ingredientes: { 
            type:String,
            required: true
        },
        receita: { 
            type:String,
            required: true
        },
        orcamento_disponivel: { 
            type:String,
            required: true
        },
        endereco_destinatario: { 
            type:String,
            required: true
        },
        data_estimada: { 
            type:String,
            required: true
        },
        pagamento: { 
            type:String,
            required: true
        },
    })
    return mongoose.model('Pedido', schema);
}();
