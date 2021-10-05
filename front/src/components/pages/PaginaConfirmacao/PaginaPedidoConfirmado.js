import { Link } from 'react-router-dom';
import '../../commom/Css/PaginaConsultaEConfirmacao.css';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';



export function PaginaPedidoConfirmado() {

    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo">
            <div className="card">
                <div className="conteudo-card">
                    <h1 className="titulo item-card">Pedido Confirmado</h1>
                    <h2 className="sub-titulo item-card" style={{ fontWeight: "normal", fontSize: "1.3vw" }}>
                        Tudo certo por aqui! A partir de agora, você pode acompanhar seu pedido
                        por meio da guia "Consultar Pedido". Qualquer atualização a gente te chama.
                    </h2>
                    <div className="info-pedido item-card">
                        <h3 className="item-card montserrat">Código do pedido: <span className="montserrat" style={{ fontWeight: "normal" }}>ADR0001</span></h3>
                        <h3 className="item-card montserrat">Horário estimado: <span className="montserrat" style={{ fontWeight: "normal" }}>12:30h</span></h3>
                        <h3 className="item-card montserrat">Data de entrega: <span className="montserrat" style={{ fontWeight: "normal" }}>19/07/2021</span></h3>
                        <h3 className="item-card montserrat">Valor total: <span className="montserrat" style={{ fontWeight: "normal" }}>R$56,87</span></h3>
                    </div>
                    <Link to="/"><input className="botao-confirmar item-card" style={{marginBottom:"5vw"}} type="submit" value="Entendido"/></Link>
                </div>
            </div>
        </div>

        <Footer></Footer>

    </div>)
}