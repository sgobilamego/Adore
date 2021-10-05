import './PaginaCadastro.css';
import history from "../../../history";
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import { useForm } from 'react-hook-form';
import { cadastro } from "../../../api/auth";

export function PaginaCadastro() {
    const {register, handleSubmit} = useForm();
    const submeterUser = (user) =>{
        cadastro(user).then((response)=>{
            console.log(response);
            history.push("/sucesso");
        }).catch((error)=>{
            console.log(error);
        })
    };

    return(<div className="container-CAD">
        <Navegador></Navegador>
        <div className="corpo-CAD">
            <div className="card-CAD">
                <div className="conteudo-card-CAD">
                    <h1>Eba, mais um prato na mesa!</h1>
                    <span className="sub-titulo-CAD">Precisamos de algumas informações para realizar o seu cadastro.</span>
                    <form className="form-CAD" onSubmit={handleSubmit(submeterUser)}>
                        <br/><span className="texto-input-CAD">Qual o seu nome?</span><br/>
                        <input type="text" className="input-codigo-CAD" id="nome" placeholder="Maria da Silva" {...register('nome')}></input>
                        <br/><span className="texto-input-CAD">E qual o seu email?</span><br/>
                        <input type="text" className="input-codigo-CAD" id="email" placeholder="mariadasilva@email.com" {...register('email')}></input>
                        <br/><span className="texto-input-CAD">E a senha, vai ser qual?</span><br/>
                        <input type="password" className="input-codigo-CAD" id="senha" {...register('senha')}></input>
                        <div className="container-ultimos-inputs">
                            <div className="data-nascimento">
                                <br/><span className="texto-input-CAD">Quantos anos você tem?</span><br/>
                                <input type="text" className="input-data-CAD" id="idade" placeholder="_ _ " {...register('idade')}></input>
                            </div>
                            <div className="cpf">
                                <br/><span className="texto-input-CAD">CPF</span><br/>
                                <input type="text" className="input-cpf-CAD" id="cpf" placeholder="_ _ _ . _ _ _ . _ _ _ - _ _" {...register('cpf')}></input>
                            </div>
                        </div>
                        <button
                            className="botao-confirmCad" 
                            >Confirmar
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>)
}