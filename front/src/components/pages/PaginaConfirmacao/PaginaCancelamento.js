import { Link } from 'react-router-dom';
import '../../commom/Css/PaginaConsultaEConfirmacao.css';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';



export function PaginaCancelamento() {

    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo">
            <div className="card">
                <div className="conteudo-card">
                    <h1 className="titulo item-card">Tem certeza disso?</h1>
                    <h2 className="sub-titulo item-card" style={{ fontWeight: "normal", fontSize: "1.3vw", padding:"1vw 5vw" }}>
                        Sentimos muito por não entregar seu pedido na data desejada. Para que você volte,
                        estamos te presenteando com um <b>voucher de 10% de desconto</b> para a próxima compra.
                    </h2>
                    <h2 className="sub-titulo item-card" style={{ fontWeight: "normal", fontSize: "1.3vw", padding:"1vw 5vw" }}>
                        Ao clicar em confirmar, seu pedido será cancelado e essa ação não poderá ser desfeita.
                    </h2>
                    <div className="botoes">
                        <Link to="/dataindisponivel" style={{marginRight: "2vw"}}><input className="botao-voltar item-card" type="submit" value="Voltar" /></Link>
                        <Link to="/"><input className="botao-confirmar item-card" type="submit" value="Confirmar" /></Link>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>

    </div>)
}