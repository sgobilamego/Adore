
import { Link } from 'react-router-dom';
import { Footer } from '../../commom/Footer/Footer';
import { Navegador } from '../../commom/Navegador/Navegador';
import bandeiras from '../../../img/bandeiras.png';
import icone_cancelar from '../../../img/icone_cancelar.png';
import icone from '../../../img/icone_interrogacao.png';
import './PaginaOrcamento.css';
import { useEffect, useState } from 'react';




function InputRange() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let inputRange = document.getElementById('input-range');
        let spanRange = document.getElementById('span-range');
        spanRange.textContent = "R$" + inputRange.value;

    });
    return (
        <div>
            <center>
                <span id="span-range"></span>
                <input id="input-range" type="range" min="50" max="500" step="50" required onClick={() => setCount(count + 50)} />
            </center>
            <div className="span-valores">
                <span>R$50</span>
                <span>R$500</span>
            </div>
        </div>
    )
}


export function PaginaOrcamento() {
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
                                    <h1>O que vai na sua receita?</h1>
                                    <br /><span className="span-orcamento">Sinta-se livre para escolher os ingredientes e respectivas especificações.</span>
                                    <br /><input type="input" className="input-codigo-orcamento" placeholder="Pesquisar..."></input>
                                </div>
                            </center>
                            <div className="ingredientes-selecionados">
                                <div className="ingrediente-selecionado">Queijo Parmesão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Cebola<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>
                                <div className="ingrediente-selecionado">Manjericão<img className="icone-cancelar" src={icone_cancelar} /></div>

                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="caixa-inferior">
                                    <span>Qual o seu orçamento?</span>
                                    <InputRange></InputRange>
                                </div>
                                <div className="caixa-inferior">
                                    <span>Qual a data?</span>
                                    <input className="data" type="date" required></input><br />
                                    <span style={{ fontSize: "0.7vw", fontWeight: "bold" }}>**As datas podem variar de acordo com as disponibilidade de pedido</span>
                                </div>
                            </div>
                        </div>
                        <div className="coluna2">
                            <center><div className="form-coluna2">
                                <h1>Sobre o pedido:</h1>
                                <br /><span className="texto-input-orcamento">Qual o nome do destinatário?</span>
                                <input type="input" className="input-codigo-orcamento" placeholder="Maria da Silva" required></input>
                                <br /><span className="texto-input-orcamento">Qual o seu vínculo com o destinatário?</span>
                                <input type="input" className="input-codigo-orcamento" placeholder="Mãe, amigo, namorada, primo, etc." required></input>
                                <br /><span className="texto-input-orcamento">Qual a receita?</span>
                                <input type="input" className="input-codigo-orcamento-grande" value="Não esqueça das quantidades em unidades de medida (xícara, mL) e modo de preparo." required></input>
                                <br /><span className="texto-input-orcamento">Qual a mensagem que deseja enviar?</span>
                                <input type="input" className="input-codigo-orcamento-grande" placeholder="Pode abrir o coração <3" required></input>
                            </div></center>
                        </div>
                        <div className="coluna3">
                            <center><div className="form-coluna3">
                                <h1>Cobrança e envio:</h1>
                                <br /><span className="span-orcamento">Qual o endereço do destinatário?</span>
                                <span className="texto-input-orcamento">Rua</span>
                                <input type="input" className="input-codigo-orcamento" placeholder="Rua das flores" required></input>
                                <div className="container-input-horizontal">
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Bairro</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-bairro" placeholder="Pé de Caju" required></input>
                                    </div>
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Número</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-numero" placeholder="020" required></input>
                                    </div>
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">CEP</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-cep" maxLength="8" placeholder="_ _ _ _ _ - _ _ _ " required></input>
                                    </div>
                                </div>
                                <div className="container-input-horizontal">
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Cidade</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-cidade" placeholder="Cajueiro" required></input>
                                    </div>
                                    <div className="inputs">
                                        <span className="texto-input-orcamento">Complemento</span>
                                        <input type="input" className="input-codigo-orcamento-pequeno-complemento" placeholder="Próx a padaraia TopPão" required></input>
                                    </div>
                                </div>
                                <br /><span className="span-orcamento">Qual a forma de pagamento?</span>
                                <span className="span-input-orcamento">Não se preocupe, você só será cobrado quando seu pedido for confirmado.</span>
                                <img className="icone-bandeiras" src={bandeiras}></img>
                                <br /><select type="input" className="input-codigo-orcamento">
                                    <option value="Cartão de crédito">Cartão de crédito</option>
                                    <option value="Cartão de crédito">Cartão de débito</option>
                                    <option value="Cartão de crédito">Boleto bancário</option>
                                </select>
                                <input type="input" className="input-codigo-orcamento" placeholder="Número do cartão" required></input>
                                <div className="container-input-horizontal">
                                    <input type="input" className="input-codigo-orcamento-pagamento" placeholder="Validade" required></input>
                                    <input type="input" className="input-codigo-orcamento" placeholder="CVV" required></input>
                                </div>
                                <Link exact to="confirmacaoorcamento"><input type="submit" className="botao-pedido" value="Enviar"></input></Link>
                            </div></center>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        <Footer></Footer>
    </div>)
}

