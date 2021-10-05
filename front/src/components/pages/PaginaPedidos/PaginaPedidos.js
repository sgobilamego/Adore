
import { Link } from 'react-router-dom';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import './PaginaPedidos.css';
export function PaginaPedidos() {
    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo-pagina-pedido">
            <div className="imagem"></div>
            <section>
                <h1>O que você deseja?</h1>
                <div className="botoes">
                    <Link exact to="/orcamento"><button>Solicitar Orçamento</button></Link>
                    <Link exact to="/consulta"><button>Consultar Pedido</button></Link>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>)
}

