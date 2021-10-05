import "./Navegador.css";
import logotipo from "./logotipo.svg";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../../App";

export function Navegador(){
    const {auth} = useContext(AuthContext);
    return(
        <div>
            {auth.token == null?
                <NavegadorNaoLogado></NavegadorNaoLogado> : 
                <NavegadorLogado></NavegadorLogado>
            }
        </div>
    )
}

export function NavegadorLogado(){
    const {setAuth} = useContext(AuthContext);
    return(
        <div className="navegador">
            <img className="logotipo" src={logotipo}/>
            <div class="links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/pedido">Pedidos</NavLink>
                <NavLink exact to="/">
                    <div onClick={()=>{setAuth({token:null, nome:null})}}>
                        Logout
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export function NavegadorNaoLogado(){
    return(
        <div className="navegador">
            <img className="logotipo" src={logotipo}/>
            <div class="links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/pedido">Pedidos</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    );
}