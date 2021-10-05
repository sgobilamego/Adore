import { Link } from 'react-router-dom';
import '../../commom/Css/PaginaConsultaEConfirmacao.css';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';



export function PaginaDataIndisponivel() {

    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo">
            <div className="card">
                <div className="conteudo-card">
                    <h1 className="titulo item-card">Confirmação de Pedido</h1>
                    <h2 className="sub-titulo item-card" style={{ fontWeight: "normal", fontSize: "1.3vw" }}>
                        Oh, não... temos um probleminha. Verificamos e é inviável entregar o seu pedido na
                        data solicitada. Se possível, selecione uma data com base nas nossas sugestões.
                    </h2>
                    <div className="info-pedido item-card">
                        <h3 className="item-card montserrat">Código do pedido: <span className="montserrat" style={{ fontWeight: "normal" }}>ADR0001</span></h3>
                        <h3 className="item-card montserrat">Horário estimado: <span className="montserrat" style={{ fontWeight: "normal" }}>12:30h</span></h3>
                        <h3 className="item-card montserrat">Valor total: <span className="montserrat" style={{ fontWeight: "normal" }}>R$56,87</span></h3>
                    </div>
                    <h2 style={{ fontWeight: "normal", fontSize: "1.3vw" }}>
                        Escolha uma nova data para a entrega:
                    </h2>
                    <div className="dias item-card">
                        <span className="dia" tabindex="-1">14/11</span>
                        <span className="dia" tabindex="-1">18/11</span>
                        <span className="dia" tabindex="-1">20/11</span>
                        <span className="dia" tabindex="-1">22/11</span>
                        <span className="dia" tabindex="-1">23/11</span>
                    </div>
                    <div className="botoes">
                        <Link to="/cancelamento"><input className="botao-cancelar item-card" type="submit" value="Quero cancelar meu pedido" /></Link>
                        <Link to="/confirmado"><input className="botao-confirmar item-card" type="submit" value="Confirmar" /></Link>
                    </div>

                </div>
            </div>
        </div>

        <Footer></Footer>

    </div>)
}