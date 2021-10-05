import { Link } from "react-router-dom";
import { Footer } from "../../commom/Footer/Footer";
import { Navegador } from "../../commom/Navegador/Navegador";
import '../../commom/Css/PaginaConsultaEConfirmacao.css';



export function PaginaConsultaValida() {
    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo">
            <div className="card">
                <div className="conteudo-card">
                    <h1 className="titulo item-card">Consultar Pedido</h1>
                    <h2 style={{ color: "#fd6b5e", fontWeight:"bold" }} className="sub-titulo item-card">CÓDIGO DO PEDIDO: ADR0001</h2>
                    <div className="status">
                        <div className="barra-progresso">
                            <div className="progresso"></div>
                            <div className="marcador-progresso"></div>
                        </div>

                        <div className="itens-status">
                            <span className="item-status">Solicitação</span>
                            <span className="item-status active">O seu pedido está em análise</span>
                            <span className="item-status">Confirmação</span>
                            <span className="item-status">Produção</span>
                            <span className="item-status">Envio</span>
                        </div>
                    </div>
                    <Link exact to="/"><input className="botao-voltar item-card" type="submit" value="Voltar"></input></Link>
                </div>
            </div>
        </div>

        <Footer></Footer>

    </div>)
}