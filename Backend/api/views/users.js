function render (user){
    return { 
        id: user._id,
        nome: user.nome,
        idade: user.idade,
        cpf: user.cpf,
        email: user.email,
    }
}
module.exports.render = render;

function renderMany(users){
    return users.map(render)
}

module.exports.renderMany = renderMany;