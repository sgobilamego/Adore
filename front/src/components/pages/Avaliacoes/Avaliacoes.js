import { Footer } from "../../commom/Footer/Footer";
import { Navegador } from "../../commom/Navegador/Navegador";
import { Galeria } from "../Avaliacoes/Galeria.js";

import "./Avaliacoes.css";

export function Avaliacoes(){
    return(
        <>
        <Navegador></Navegador>
        <Header></Header>
        <Galeria></Galeria>
        <Footer></Footer>
        </>
    )
}

export function Header(){
    return(
        <div className="header">
            <h1>Nossas porções de amor já chegaram a</h1>
            <div  className="info">
                <div className="pessoas">
                    <h2>1360</h2>
                    <p>Pessoas que amam contar história através da comida</p>
                </div>
                <div className="cidades">
                    <h2>50</h2>
                    <p>Cidades diferentes</p>
                </div>
                <div className="chances">
                    <h2>100%</h2>
                    <p>De chance de deixar seu dia mais feliz</p>
                </div>
            </div>
            {/* <img src={avaliacoes}/>    */}
        </div>
    )
}


