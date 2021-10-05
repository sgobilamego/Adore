
import { Link } from 'react-router-dom';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import bandeiras from '../../../img/bandeiras.png';
import icone_cancelar from '../../../img/icone_cancelar.png';
import icone from '../../../img/icone_interrogacao.png';
import './PaginaOrcamento.css';
import { useEffect, useState } from 'react';

export function PaginaPedidoRealizado() {
    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo-pagina-orcamento">
            <div className="imagem"></div>
            <div className="container-topo">
                <div className="texto-topo">
                    <h1>Que história vamos contar hoje?</h1>
                    <span>
                        Nós da À Dorê somos especialistas em contar histórias. Somos apaixonados pelo afeto
                        que se mostra em cada ingrediente, colheradas generosas e abraços apertados. E você,
                        quel receita te trouxe até aqui? Como podemos te ajudar a contar essa história?
                    </span>
                </div>
            </div>
            <section>
                <form>
                    <div className="container-branco">
                        <h1 style={{fontSize: "2.8vw", padding:"0vw 4vw 0 4vw"}}>Tudo certo por aqui!</h1>
                        <span style={{fontSize: "1.4vw", padding:"2.5vw 8.5vw 2.5vw 8.5vw", textIndent:"0", textAlign:"center"}}>
                            O seu pedido foi enviado com sucesso. Pedimos até 4 dias úteis para a confirmação do seu pedido,
                            vamos buscar seus ingredientes. Vamos enviar uma cópia da solicitação para o seu email.
                        </span>
                        <h2 style={{fontSize: "1.8vw", color:"#fd6b5e"}}>CÓDIGO DO PEDIDO: ADR0001</h2>
                        <Link to="/"><input className="botao-confirmacao" type="submit" value="Entendido"/></Link>
                    </div>
                </form>
            </section>
        </div>
        <Footer></Footer>
    </div>)
}

