import './PaginaLogin.css';
import { Link } from 'react-router-dom';
import history from "../../../history";
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import { useForm } from 'react-hook-form';
import { login } from '../../../api/auth';
import { useContext } from 'react';
import { AuthContext } from '../../../App';

export function PaginaLogin() {
    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);

    const submeterLogin = (login_data) =>{
        login(login_data).then((response)=>{
            auth.setAuth({ token: response.data.token, nome: response.data.nome});
            history.push("/");
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(<div className="container-login">
        <Navegador></Navegador>
        <div className="corpo">
            <div className="card">
                <div className="conteudo-card">
                    <h1 className="titulo-login">Que bom te ter por aqui!</h1>
                    <span className="sub-titulo-login">Faça <strong>login</strong> para acessar sua conta</span>
                    <form className="form-login item-card" onSubmit={handleSubmit(submeterLogin)}>      
                        <input className="input-login item-card" type="input" id="email" placeholder="Email" {...register('email')}></input>
                        <input className="input-login item-card" type="password" id="senha" placeholder="Senha" {...register('senha')}></input>
                        <Link to="/mudar-senha" className="esqueceu-senha">Esqueceu a senha?</Link>
                        <button
                            className="botao-confirmar item-card"
                            >Acesse sua conta
                        </button>
                        <Link to="/cadastro"><input className="botao-cadastro item-card" type="submit" value="Cadastre-se"></input></Link>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>)
}