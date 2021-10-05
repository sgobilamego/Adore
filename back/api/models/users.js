const mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        idade: { 
            type:String,
            required: true
        },
        cpf: { 
            type:String,
            required: true
        },
        email: { 
            type:String,
            required: true
        },
        senha: { 
            type:String,
            required: true
        },
    })
    return mongoose.model('User', schema);
}();