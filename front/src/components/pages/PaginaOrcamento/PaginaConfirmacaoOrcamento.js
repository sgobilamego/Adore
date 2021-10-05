
import { Link } from 'react-router-dom';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import bandeiras from '../../../img/bandeiras.png';
import icone_cancelar from '../../../img/icone_cancelar.png';
import icone from '../../../img/icone_interrogacao.png';
import './PaginaOrcamento.css';
import { useEffect, useState } from 'react';



export function PaginaConfirmacaoOrcamento() {
    return (<div className="container">
        <Navegador></Navegador>
        <div className="corpo-pagina-orcamento">
            <div className="imagem"></div>
            <div className="container-topo">
                <div className="texto-topo">
                    <h1>Que história vamos contar hoje?</h1>
                    <span>
                        Nós da À Dorê somos especialistas em contar histórias. Somos apaixonados pelo afeto
                        que se mostra em cada ingrediente, colheradas generosas e abraços apertados. E você,
                        quel receita te trouxe até aqui? Como podemos te ajudar a contar essa história?
                    </span>
                </div>
            </div>
            <section>
                <form>
                    <div className="container-orcamento">
                        <div className="coluna1">
                            <center>
                                <div className="form-coluna1">
                                    <h1>1. O que vai na sua receita?</h1>
                                    <br /><span className="span-orcamento" style={{fontWeight:"bold"}}>Ingredientes selecionados:</span>
                                </div>
                            </center>
                            <ul className="lista-ingredientes">
                                <li className="item-lista-ingredientes">1x Queijo Parmesão</li>
                                <li className="item-lista-ingredientes">1x Cebola</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                                <li className="item-lista-ingredientes">5x Manjericão</li>
                            </ul>
                            <div style={{ display: "flex" }}>
                                <div className="caixa-inferior">
                                    <span>Qual o seu orçamento?</span><br/>
                                    <span style={{fontWeight:"bold"}}>Até R$100</span>
                                </div>
                                <div className="caixa-inferior">
                                    <span>Qual a data?</span><br/>
                                    <span style={{fontWeight:"bold"}}>19/11/2021</span>
                                </div>
                            </div>
                            <span style={{ fontSize: "0.7vw", fontWeight: "bold", marginLeft:'11.5vw', width:"6vw", marginTop:"-1.5vw", marginBottom:"1.5vw" }}>**As datas podem variar de acordo com as disponibilidade de pedido</span>
                            
                        </div>
                        <div className="coluna2">
                            <center><div className="form-coluna2">
                                <h1>2. Sobre o pedido:</h1>
                                <br /><span className="texto-input-orcamento">Nome do destinatário:</span>
                                <input type="input" className="input-codigo-orcamento" style={{color:"black"}} value="Maria da Silva" disabled></input>
                                <br /><span className="texto-input-orcamento">Vínculo com o destinatário:</span>
                                <input type="input" className="input-codigo-orcamento"  style={{color:"black"}} value="Mãe" disabled></input>
                                <br /><span className="texto-input-orcamento">Receita:</span>
                                <input type="input" className="input-codigo-orcamento-grande" style={{color:"black"}} value="1 pacote de macarrão" disabled></input>
                                <br /><span className="texto-input-orcamento">Mensagem:</span>
                                <input type="input" className="input-codigo-orcamento-grande"  style={{color:"black"}} value="Mensagem fofinha aqui" disabled></input>
                            </div></center>
                        </div>
                        <div className="coluna3">
                            <center><div className="form-coluna3">
                                <h1>Cobrança e envio:</h1>
                                <br /><span className="span-orcamento">Endereço de entrega:</span>
                                <span className="texto-input-orcamento">Rua</span>
                                <input type="input" className="input-codigo-orcamento"  style={{color:"black"}} value="Rua das flores" disabled></input>
                                <div className="container-input-horizontal">
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Bairro</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-bairro"  style={{color:"black"}} value="Pé de Caju" disabled></input>
                                    </div>
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Número</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-numero"  style={{color:"black"}} value="020" disabled></input>
                                    </div>
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">CEP</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-cep" maxLength="8"  style={{color:"black"}} value="63630-000" disabled></input>
                                    </div>
                                </div>
                                <div className="container-input-horizontal">
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Cidade</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-cidade" style={{color:"black"}}value="Cajueiro" disabled></input>
                                    </div>
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Complemento</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-complemento" style={{color:"black"}} value="Próx a padaraia TopPão" disabled></input>
                                    </div>
                                </div>
                                <br /><span className="span-orcamento">Qual a forma de pagamento?</span>
                                <span className="span-input-orcamento">Não se preocupe, você só será cobrado quando seu pedido for confirmado.</span>
                                <br /><select type="input" className="input-codigo-orcamento" style={{color:"black"}} value="Cartão de crédito" disabled>
                                    <option value="Cartão de crédito">Cartão de crédito</option>
                                    <option value="Cartão de crédito">Cartão de débito</option>
                                    <option value="Cartão de crédito">Boleto bancário</option>
                                </select>
                                <input type="input" className="input-codigo-orcamento" style={{color:"black"}} value="**** **** 3214" disabled></input>
                                <div className="container-input-horizontal">
                                    <input type="input" className="input-codigo-orcamento-pagamento" style={{color:"black"}} value="07/25" disabled></input>
                                    <input type="input" className="input-codigo-orcamento" style={{color:"black"}} value="019" disabled></input>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <Link exact to="orcamento" ><input type="submit" className="botao-voltar-orcamento" value="Voltar"></input></Link>
                                    <Link exact to="pedidorealizado"><input type="submit" className="botao-pedido" value="Enviar"></input></Link>
                                </div>
                            </div></center>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        <Footer></Footer>
    </div>)
}

