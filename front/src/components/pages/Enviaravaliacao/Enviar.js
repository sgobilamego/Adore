import "./Enviar.css";
import React, { useEffect, useState } from "react";
import { Footer } from "../../commom/Footer/Footer";
import { Navegador } from "../../commom/Navegador/Navegador";
import foto from "./component2.jpg"
import { NavLink } from "react-router-dom";

const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
  };
  
  const InputAdore = () => {
    const [img, setImg] = useState('');
    return (
      <div className="enviar-container">
        <div className="box">
          <input
            className="input-comp"
            id='input'
            type='file'
            onChange={e => getBase64(e.target.files[0], setImg)}
          />
          <img className="foto" src={img || null} />
          <div className="clicar">
            <h5 className="clique" onClick={() => document.getElementById('input').click()}>
              Adicione uma foto desse momento especial 📷
            </h5>
          </div>
        </div>
      </div>
    );
  };
  
  export default InputAdore;


  export function Componente(){
    return(
      <div className="all">
        <div className="content">
          <h1 className="enviar-h1">Conta para gente o que você achou do seu pedido</h1>
          <InputAdore></InputAdore>
          <div className="form">
            <form className="form-one">
              <div className="pedido">
                <label className="enviar-label" for="cars">Selecione o pedido que deseja avaliar</label>
                <select className="enviar-select" name="produtos" id="produtos">
                  <option className="enviar-option" value="filé">Penne ao Sugo (cod. ADR0004 | 18/04/21)</option>
                  <option className="enviar-option" value="bolo">Bolo de Cenoura (cod. ADR0006 | 13/05/21)</option>
                  <option className="enviar-option" value="macarrao">Fettuccine ao molho branco (cod. ADR0016 | 13/08/21)</option>
                </select>
              </div>

              <div className="estrela">
                <p>O quanto você gostou?</p>
                <h2>✰ ✰ ✰ ✰ ✰</h2>
              </div>

            </form>
          </div>

          <form className="form-two">
            <label for="story">Como foi sua experiência? Queremos saber cada detalhe</label>
              <textarea required id="story" name="story"></textarea>
          </form>
          
          <div className="align">
            <NavLink className="button-enviar" to="/avaliacaoenviada">Enviar</NavLink> 
          </div>
        </div>
        
      </div>
    )
  }

  export function Enviar(){
    return(
      <>
      <Navegador></Navegador>
      <Componente></Componente>
      <Footer></Footer>
      </>
    )
  }