import { Link, NavLink } from 'react-router-dom';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import './PaginaCadastro.css';


export function DeuCerto() {
    return(<div className="container-CAD">
        <Navegador></Navegador>
        <div className="corpo-CAD">
            <div className="card-CAD">
                <div className="conteudo-card-CAD">
                    <h1>Deu tudo certo!</h1>
                    <br/><span className="sub-titulo-CAD">A À Dorê está muito feliz em te ver por aqui. Qureremos <br/>
                     que você tenha praticidade para surpreender quem ama.<br/>
                     <br/>
                     Em instantes enviaremos uma mensagem de <br/>
                     confirmação de cadastro para o seu email.</span>
                    <Link to="/login"><input type="submit" className="botao-sucesso" value="Login"></input></Link>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>)
}