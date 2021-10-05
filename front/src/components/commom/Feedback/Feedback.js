import feed1 from "./feed1.jpg"
import feed2 from "./feed2.jpg"
import feed3 from "./feed3.jpg"

import "./Feedback.css";
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
    
    export function Feedback(){
        let infoFeed = [
            {
                id: 1,
                img: feed1,
                nome: "Gilberto Souza",
                classificacao: "★★★★★",
                cidade: "Icó - Ceará",
                texto: "Eu ameeeei, os ingredientes vieram muito bem conservados e protegidos, eu tinha medo de algo chegar quebrado ou amassado demais, até relevaria caso chegasse, mas veio em perfeito estado, minha mãe também amou tudo, com certeza contratarei este serviço novamente!",
            },
            {    
                id: 2,
                img: feed2,
                nome:"Roberta Rodrigues",
                classificacao: "★★★★☆",
                cidade: "Itapipoca - Ceará",
                texto: "A torta portuguesa da minha vó sempre foi muito especial, mas ganhamos na loteria ao contratar este serviço, conseguiram deixar tudo mais especial, ficamos tão satisfeitas que já estamos esperando pelo aniversário dela ansiosamente, obrigada pelo serviço e dedicação.",    
            },
            {
                id: 3,
                img: feed3,
                nome:"Ariel Lima",
                classificacao: "★★★★★",
                cidade: "Fortaleza - Ceará",
                texto: "Eu adorei a ideia do serviço porque sempre foi muita correria pra estar na rua cedo para comprar os ingredientes para preparar o prato que meu namorado e eu fazemos todos os meses, adorei como foi tudo bem organizado desde o começo e a qualidade dos produtos estava impecável.",
            },
        ];
        
        let feedback = infoFeed.map((card)=>(
                <Card 
                card={card}>
                </Card>
            )
        )
            
        return(
            <div className="feedback">
                <div className="elementos">
                    <div className="teste">
                        {feedback}
                    </div>
                    <NavLink className="button" to="/avaliacoes">Veja a história de quem comprou</NavLink> 
                </div>
            </div>
            )
    }