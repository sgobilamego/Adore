const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//a. POST: cadastra uma nova faq
module.exports.inserirFaq = function(req, res){
    let faq = req.body;
    faqs.push(faq);
    res.json(faq).status(201);
}

//b. GET: lista todas as faqs
module.exports.listarFaqs = function (req, res){
    res.json(faqs);
}

//c. DELETE: apaga faq com dado id
module.exports.apagarFaq = function(req, res){
    let id = req.params.id;
    faqs = faqs.filter(function(faq){return faq.id!=id});
    res.json ({mensagem:"Deletado com sucesso."});
}

let faqs = [
    {
        id: "1",
        titulo: "Como funciona?",
        descricao: "A À Dorê entrega afeto e ingredientes para preparo. Você, cliente, nos informa um destinatário para presentar, receita, ingredientes, mensagem e preferências e nós arrumamos todo o resto! Pedimos um prazo de até quatro dias para confirmar a solicitação do pedido. Durante esses dias buscamos ingredientes, materiais necessários, checamos a possibilidade de envio, tudo para que você tenha a melhor experiência possível.",
    },
    {   
        id: "2",
        titulo: "Quais as formas de pagamento?",
        descricao: "O pagamento é selecionado durante a solicitação de pedido. Aceitamos cartões de crédito, débito, pix, boleto e transferência bancária. No caso do pagamento de crédito, pedimos as informações antecipadamente, mas você só será cobrado mediante confirmação do pedido. Os pagamentos à vista, como Pix, serão solicitados no momento de confirmação com o prazo de até 4 dias úteis para débito, caso contrário, o pedido será cancelado.",
    },
    {
        id: "3",
        titulo: "Como posso fazer meu pedido?",
        descricao: "Para fazer um pedido é necessário estar cadastrado no nosso site, esse processo é rapidinho e gratuito! Feito isso, ou mediante login, o usuário pode realizar o pedido através da home page, clicando em Solicitar Orçamento, ou na nav bar, clicando em Pedidos > Solicitar Orçamento. Clique aqui para saber mais sobre solicitações de orçamento.",
    },
    {
        id: "4",
        titulo: "Perdi meu código de pedido, e agora?",
        descricao: "Caso tenha perdido seu código, entre em contato conosco atráves do email adoreafeto@contato.com.br informando seus dados e os dados do remetente. Após conferir as informações no nosso banco de dados, retornaremos o código de pedido.",
    },
    {
        id: "5",
        titulo: "Como funciona a entrega?",
        descricao: "Nossa entrega é local e mediante disponibilidade, ou seja, por enquanto entregamos somente em algumas regiões do estado do Ceará, dependendo das condições de envio dos nossos produtores e colaboradores. Ao confirmar o pedido, o cliente tem a opção de esoclher um horário aproximado para a entrega do pedido.",
    },
    {
        id: "6",
        titulo: "Meu pedido veio errado, e agora?",
        descricao: "A À Dorê trabalha intensamente para te entregar a melhor experiência possível, com afetos, ingredientes frescos, artesanais e de produtores locais. Ainda assim, caso encontre um problema no seu pedido, solicitamos que tire fotos para registro e encaminhe para o nosso email adoreafeto@contato.com.br, relatando o ocorrido. Ficaremos muito gratos em poder resolver o inconveniente.",
    },
]