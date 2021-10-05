import { Link } from 'react-router-dom';
import '../../commom/Css/PaginaConsultaEConfirmacao.css';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';



export function PaginaConfirmacao() {

    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo">
            <div className="card">
                <div className="conteudo-card">
                    <h1 className="titulo item-card">Confirmação de Pedido</h1>
                    <h2 className="sub-titulo item-card" style={{ fontWeight: "normal", fontSize: "1.3vw" }}>
                        Eba, o seu pedido foi aceito! Estamos ansiosos para te ajudar a surpreender quem você
                        ama. Por favor, confira as informações abaixo e clique em confirmar.
                    </h2>
                    <div className="info-pedido item-card">
                        <h3 className="item-card montserrat">Código do pedido: <span className="montserrat" style={{ fontWeight: "normal" }}>ADR0001</span></h3>
                        <h3 className="item-card montserrat">Data de entrega: <span className="montserrat" style={{ fontWeight: "normal" }}>19/07/2021</span></h3>
                        <h3 className="item-card montserrat">Valor total: <span className="montserrat" style={{ fontWeight: "normal" }}>R$56,87</span></h3>
                    </div>
                    <h2 style={{ fontWeight: "normal", fontSize: "1.3vw" }}>
                        Escolha um horário aproximado para a entrega:
                    </h2>
                    <div className="horarios item-card">
                        <span className="horario" tabindex="-1">10:30h</span>
                        <span className="horario" tabindex="-1">12:30h</span>
                        <span className="horario" tabindex="-1">14:00h</span>
                        <span className="horario" tabindex="-1">16:30h</span>
                        <span className="horario" tabindex="-1">18:00h</span>
                    </div>
                    <Link to="/confirmado"><input className="botao-confirmar item-card" type="submit" value="Confirmar"/></Link>
                    <Link className="link">Encontrou um problema?</Link>
                </div>
            </div>
        </div>

        <Footer></Footer>

    </div>)
}