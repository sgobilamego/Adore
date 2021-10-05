import { Footer } from "../../commom/Footer/Footer";
import { Navegador } from "../../commom/Navegador/Navegador";
import { Link, NavLink } from "react-router-dom";
import "./AvaliacaoEnviada.css";

export function AvaliacaoEnviada(){
    return(

        <>
        <Navegador></Navegador>
        <div className="conteudo-all">
            <div className="conteudo-inside">
                <h1 className="h1-black">Avaliação enviada!</h1>
                <p className="p-black" >Obrigada por compartilhar sua opinião com a gente. <br>
                </br>Esperamos que a À Dorê possa encher de afeto os momentos que virão.</p>
                <NavLink className="button-ate" to="/">Até a próxima!</NavLink>
            </div> 

           
        </div>
        <Footer></Footer>
        </>
    )
}