import { Link, NavLink } from "react-router-dom"
import "./Footer.css";

import instagram from "./instagram.svg"
import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import logotipo from "./logotipo.svg"


export function Footer(){
    return(
        <div className="footer">
            <img className ="logotipo" src={logotipo}/>

            <div className="menu1">
                <p><b>Explorar</b></p>
                <NavLink to="/">Início</NavLink>
                <NavLink to="/orcamento">Orcamento</NavLink>
            </div>

            <div className="menu2">
                <p><b>Ajuda</b></p>
                <NavLink to="/faq">FAQ</NavLink>
            </div>

            <div className="menu3">
                <p><b>Siga-nos</b></p>
                <div className="redes">
                    <a href="https://www.instagram.com/adoreafeto/"><img src={instagram}/></a>
                    <a href="google.com"><img src={twitter}/></a>
                    <a href="google.com"><img src={facebook}/></a>
                </div>           
            </div>
        </div>
    );
}