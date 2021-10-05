const Review = require ("../models/reviews.js");
const view = require ("../views/reviews");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//a. POST: cadastra uma nova review
module.exports.inserirReview = function(req, res){
    let review = {
        codigopedido: req.body._idpedido,
        texto: req.body.texto,
        nota: req.body.nota,
    }

    let promise = Review.create(review)

    promise.then(function(review){
        res.status(201).json({mensagem: "Concluído com sucesso. Agredecemos o seu feedback!"});
    }).catch(function(error){
       res.status(400).json({mensagem: "Ops, dados incompletos. Confira os campos e tente novamente."});
    })
}

//b. GET: lista todas as reviews
module.exports.listarReviews = function (req, res){
    res.json(reviews);
}

//c. DELETE: apaga review com dado id
module.exports.removerReview = function(req, res){
    let id = req.params.id;

    let promise = Review.findByIdAndDelete(id);
    promise.then(function(review){
        res.status(200).json({mensagem:"Review foi deletada."});
    }).catch(function(error){
        res.status(400).json({mensagem: "Ops, deu erro. Acho que essa review não existe. Tente novamente."});
    })
}

let reviews = [
    {
        id: "1",
        img: "img.png",
        nome: "Ariel Lima",
        email: "arielima@gmail.com",
        cidade: "Fortaleza - Ceará",
        nota: "5",
        texto: "Eu adorei a ideia do serviço porque sempre foi muita correria para comprar os ingredientes e preparar o prato que meu namorado e eu fazemos todos os meses, adorei como foi tudo bem organizado desde o começo e a qualidade dos produtos estava impecável.",
    },
    {
        id: "2",
        img: "img.png",
        nome: "Gilberto Souza",
        email: "arielima@gmail.com",
        cidade: "Icó - Ceará",
        nota: "4",
        texto: "Eu ameeeei, os ingredientes vieram muito bem conservados e protegidos, eu tinha medo de algo chegar quebrado ou amassado demais, mas veio em perfeito estado, minha mãe também amou tudo, com certeza contratarei este serviço novamente!",
    },
    {
        id: "3",
        img: "img.png",
        nome: "Roberta Rodrigues",
        email: "arielima@gmail.com",
        cidade: "Itapipoca - Ceará",
        nota: "5",
        texto: "A torta portuguesa da minha vó sempre foi muito especial, mas ganhamos na loteria ao contratar este serviço, conseguiram deixar tudo mais especial, ficamos tão satisfeitas que já estamos esperando pelo aniversário dela ansiosamente, obrigada pelo serviço e dedicação.",
    },
    {
        id: "4",
        img: "img.png",
        nome: "Carol Sousa",
        email: "arielima@gmail.com",
        cidade: "Fortaleza - Ceará",
        nota: "5",
        texto: "Aqui em casa somos todos veg e tudo chegou perfeitamente, com tanto cuidado e amor...foi ótimo oferecer essa refeição para a minha família e certamente irei repetir.",
    },
    {
        id: "5",
        img: "img.png",
        nome: "Laís Cavalcante",
        email: "arielima@gmail.com",
        cidade: "Tabuleiro - Ceará",
        nota: "5",
        texto: "Quando eu era criança, meu pai sempre preparava uma salada deliciosa nos almoços de domingo, encomendei a minha favorita para cozinharmos juntos no dia dos pais. E o resultado? Foi ótimo, tudo fresco, prático e delicioso.",
    },
    {
        id: "6",
        img: "img.png",
        nome: "Carlos Renato",
        email: "arielima@gmail.com",
        cidade: "Casvavel - Ceará",
        nota: "5",
        texto: "Toda casa ama uma farofa, né? Mas aqui em casa, minha mãe é mestre nisso. Agora que moro sozinho, fiz um pedido para fazer a minha versão da farofa da mamãe no primeiro almoço de família aqui no apê, tudo perfeito, conforme pedido, entrega ótima.",
    },
    {
        id: "7",
        img: "img.png",
        nome: "Arthur do Vigor",
        email: "arielima@gmail.com",
        cidade: "Icó - Ceará",
        nota: "5",
        texto: "Morei fora do Brasil por um tempo, na Florida, onde conheci a Anne. Todos os dias, no café da manhã, não poderia faltar uma avocado toast. Esse pedido me trouxe tantas lembranças boas!",
    },
    {
        id: "8",
        img: "img.png",
        nome: "Beatriz Dufim",
        email: "arielima@gmail.com",
        cidade: "Fortaleza - Ceará",
        nota: "4",
        texto: "Eu amo o pão da minha nona e tinha muuuito tempo que não fazia essa receita, nem sei descrever a minha emoção quando abri a caixa! Maravilhoso, eu amei! Genial!",
    },
]