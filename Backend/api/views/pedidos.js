function render (pedido){
    return { 
        id: pedido._id, //gera o código do pedido
        status: "em processamento", //teste de retorno do status
        nome_destinatario: pedido.nome_destinatario,
        vinculo_destinatario: pedido.vinculo_destinatario,
        mensagem: pedido.mensagem,
        ingredientes: pedido.ingredientes,
        receita: pedido.receita,
        orcamento_disponivel: pedido.orcamento_disponivel,
        endereco_destinatario: pedido.endereco_destinatario,
        data_estimada: pedido.data_estimada,
        pagamento: pedido.pagamento,
    }
}
module.exports.render = render;

function renderMany(pedidos){
    return pedidos.map(render)
}

module.exports.renderMany = renderMany;