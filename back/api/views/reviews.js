function render (review){
    return { 
        codigopedido: pedido._idpedido,
        texto: review.texto,
        nota: review.nota,
    }
}
module.exports.render = render;

function renderMany(reviews){
    return reviews.map(render)
}

module.exports.renderMany = renderMany;