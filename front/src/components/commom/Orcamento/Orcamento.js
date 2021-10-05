import "./Orcamento.css";

import background from "./background.jpg"
import { NavLink } from "react-router-dom";

export function Orcamento(){
    return(
        <div className="orcamento">
            <div className="conteudo">
                <h2 className="titulo">Histórias com afeto e memória</h2>
                <p className="text">Farinha no nariz, mão na massa, aquele cheirinho de casa. <br/> Gostamos da beleza que vive em cada receita, nas memórias <br/> que passam de geração em geração com afeto. 
                <br/><br/>Que história você quer contar hoje?</p>
                <NavLink className="button" to="/orcamento">Solicite um orçamento</NavLink> 
                {/* Alterar para link do Lucas */}
            </div>
                <img className="background" src={background}/>
        </div>
    )
}