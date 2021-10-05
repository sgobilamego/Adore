const mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        texto: { 
            type:String,
            required: true
        },
        nota: { 
            type:String,
            required: true
        },
    })
    return mongoose.model('Review', schema);
}();
