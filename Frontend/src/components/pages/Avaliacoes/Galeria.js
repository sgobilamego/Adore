// import feed1 from "./feed1.jpg"
import foto1 from "./fotos/foto1.svg";
import foto2 from "./fotos/foto2.svg";
import foto3 from "./fotos/foto3.svg";
import foto4 from "./fotos/foto4.svg";
import foto5 from "./fotos/foto5.svg";
import foto6 from "./fotos/foto6.svg";
import foto7 from "./fotos/foto7.svg";
import foto8 from "./fotos/foto8.png";

// import feed3 from "./feed3.jpg"

import "./Galeria.css";
import { NavLink } from "react-router-dom";

export function Card({card}){
    return(
        <div class="feed-cliente">
            <img className="img" src={card.img}/>
            <div class="dados">
                <h2>{card.nome}</h2>
                <p className="avaliacao">{card.classificacao}</p>
            </div>
            <p class="cidade">{card.cidade}</p>
            <p className="texto">{card.texto}</p>
        </div>
        )
    }
    
    export function Galeria(){
        let avaliacao = [
            {
                id: 1,
                img: foto1,
                nome: "Ariel Lima",
                classificacao: "★★★★★",
                cidade: "Fortaleza - Ceará",
                texto: "Eu adorei a ideia do serviço porque sempre foi muita correria para comprar os ingredientes e preparar o prato que meu namorado e eu fazemos todos os meses, adorei como foi tudo bem organizado desde o começo e a qualidade dos produtos estava impecável.",
            },
            {    
                id: 2,
                img: foto2,
                nome:"Gilberto Souza",
                classificacao: "★★★★☆",
                cidade: "Icó - Ceará",
                texto: "Eu ameeeei, os ingredientes vieram muito bem conservados e protegidos, eu tinha medo de algo chegar quebrado ou amassado demais, mas veio em perfeito estado, minha mãe também amou tudo, com certeza contratarei este serviço novamente.",    
            },
            {
                id: 3,
                img: foto3,
                nome:"Carol Souza",
                classificacao: "★★★★★",
                cidade: "Fortaleza - Ceará",
                texto: "Aqui em casa somos todos veg e tudo chegou perfeitamente, com tanto cuidado e amor...foi ótimo oferecer essa refeição para a minha família e certamente irei repetir.",
            },
            {
                id: 4,
                img: foto4,
                nome:"Roberta Rodrigues",
                classificacao: "★★★★★",
                cidade: "Itapipoca - Ceará",
                texto: "A torta portuguesa da minha vó sempre foi muito especial, mas ganhamos na loteria ao contratar este serviço, conseguiram deixar tudo mais especial, ficamos tão satisfeitas que já estamos esperando pelo aniversário dela ansiosamente, obrigada pelo serviço e dedicação.",    
            },
            {
                id: 5,
                img: foto5,
                nome:"Beatriz Dufim",
                classificacao: "★★★★★",
                cidade: "Fortaleza - Ceará",
                texto: "Eu amo o pão da minha nona e tinha muuuito tempo que não fazia essa receita, nem sei descrever a minha emoção quando abri a caixa! Maravilhoso, eu amei! Genial!.",    
            },
            {
                id: 6,
                img: foto6,
                nome:"Arthur do Vigor",
                classificacao: "★★★★★",
                cidade: "Quixadá - Ceará",
                texto: "Morei fora do Brasil por um tempo, na Florida, onde conheci a Anne. Todos os dias, no café da manhã, não poderia faltar uma avocado toast. Esse pedido me trouxe tantas lembranças boas!",    
            },
            {
                id: 7,
                img: foto7,
                nome:"Carlos Renato",
                classificacao: "★★★★☆",
                cidade: "Cascável - Ceará",
                texto: "Toda casa ama uma farofa, né? Mas aqui em casa, minha mãe é mestre nisso. Agora que moro sozinho, fiz um pedido para fazer a minha versão da farofa da mamãe no primeiro almoço de família aqui no apê, tudo perfeito, conforme pedido, entrega ótima.",    
            },
            {
                id: 8,
                img: foto8,
                nome:"Laís Cavalcante",
                classificacao: "★★★★★",
                cidade: "Tabuleiro - Ceará",
                texto: "Quando eu era criança, meu pai sempre preparava uma salada deliciosa nos almoços de domingo, encomendei a minha favorita para cozinharmos juntos no dia dos pais. E o resultado? Foi ótimo, tudo fresco, prático e delicioso.",    
            }
            
        ];
        
        let feedback = avaliacao.map((card)=>(
                <Card 
                card={card}>
                </Card>
            )
        )
            
        return(
            <div className="galeria">
            <h1>Conheça um pouco do que fazemos</h1>
            <div className="elementos">
                <div className="teste">
                    {feedback}
                </div>
            </div>
            <p>Já recebeu o seu pedido?</p>
            <NavLink className="button" to="/enviarfeedback">Compartilha com a gente</NavLink> 
            </div>
            )
    }