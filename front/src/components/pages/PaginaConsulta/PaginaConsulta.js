import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import icone from '../../../img/icone_interrogacao.png';
import '../../commom/Css/PaginaConsultaEConfirmacao.css';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function FormularioConsulta() {

        const {register, handleSubmit} = useForm();
        const onSubmit = data => {
            
    };

    
    return (
        <div className="conteudo-card">
            <h1 className="titulo item-card">Consultar Pedido</h1>
            <h2 className="sub-titulo item-card">Por favor, informe o código do seu pedido</h2>
            <form className="form-codigo item-card" onSubmit={handleSubmit(onSubmit)}>
                <input className="input-codigo item-card" type="input" placeholder="Código do pedido"  {...register("codigo", {required: true})}/>
                <span className="item-card"><img className="icone-interrogacao" src={icone}></img> O código do pedido é informado ao final de uma solicitação de orçamento. Enviamos uma cópia desse código também para o seu e-mail.</span>
                <Link to="/consultavalida"><input className="botao-confirmar item-card" type="submit" value="Confirmar"/></Link>
            </form>
        </div>
    )
}

export function PaginaConsulta() {
    
    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo">
            <div className="card">
                <div className="conteudo-card">
                    <FormularioConsulta></FormularioConsulta>
                </div>
            </div>
        </div>

        <Footer></Footer>

    </div>)
}