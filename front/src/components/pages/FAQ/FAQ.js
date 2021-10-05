import { Link, NavLink } from "react-router-dom";
import { Accordion } from "../../commom/Accordion/Accordion";
import { Footer } from "../../commom/Footer/Footer";
import { Navegador } from "../../commom/Navegador/Navegador";
import { useState } from "react";
import './FAQ.css';

export function FAQ(){
    const [active, setActive] = useState("");


    return(
        <div className="container">
            <Navegador></Navegador>
            <div className="corpo-faq">
                <div className="container-esquerdo">
                    <h1>Restou alguma dúvida?</h1>
                    <span>Aqui a gente te explica melhor :)</span>
                </div>
                <div className="container-direito">
                    <Accordion title="Como funciona?"
                    text="A À Dorê entrega afeto e ingredientes para preparo. Você, cliente, nos informa um destinatário para presentar, receita, ingredientes, mensagem e preferências e nós arrumamos todo o resto! 
                    Pedimos um prazo de até quatro dias para confirmar a solicitação do pedido. Durante esses dias buscamos ingredientes, materiais necessários, checamos a possibilidade de envio, tudo para que você tenha a melhor experiência possível." 
                    active={active} setActive={setActive}></Accordion>

                    <Accordion title="Quais as formas de pagamento?"
                    text="O pagamento é selecionado durante a solicitação de pedido. Aceitamos cartões de crédito, débito, pix, boleto e transferência bancária.
                    No caso do pagamento de crédito, pedimos as informações antecipadamente, mas você só será cobrado mediante confirmação do pedido. Os pagamentos à vista, como Pix, serão solicitados no momento de confirmação com o prazo de até 4 dias úteis para débito, caso contrário, o pedido será cancelado." 
                    active={active} setActive={setActive}></Accordion>

                    <Accordion title="Como posso fazer um pedido?"
                    text="Para fazer um pedido é necessário estar cadastrado no nosso site, esse processo é rapidinho e gratuito!
                    Feito isso, ou mediante login, o usuário pode realizar o pedido através da home page, clicando em Solicitar Orçamento, ou na nav bar, clicando em Pedidos > Solicitar Orçamento.

                    Clique aqui para saber mais sobre solicitações de orçamento."
                    active={active} setActive={setActive}></Accordion>

                    <Accordion title="Perdi meu código de pedido, e agora?"
                    text="Caso tenha perdido seu código, entre em contato conosco atráves do email adoreafeto@contato.com.br informando seus dados e os dados do remetente. Após conferir as informações no nosso banco de dados, retornaremos o código de pedido."
                    active={active} setActive={setActive}></Accordion>

                    <Accordion title="Como funciona a entrega?"
                    text="Nossa entrega é local e mediante disponibilidade, ou seja, por enquanto entregamos somente em algumas regiões do estado do Ceará, dependendo das condições de envio dos nossos produtores e colaboradores. Ao confirmar o pedido, o cliente tem a opção de esoclher um horário aproximado para a entrega do pedido." 
                    active={active} setActive={setActive}></Accordion>

                    <Accordion title="Meu pedido veio errado, e agora?"
                    text="A À Dorê trabalha intensamente para te entregar a melhor experiência possível, com afetos, ingredientes frescos, artesanais e de produtores locais. Ainda assim, caso encontre um problema no seu pedido, solicitamos que tire fotos para registro e encaminhe para o nosso email adoreafeto@contato.com.br, relatando o ocorrido. Ficaremos muito gratos em poder resolver o inconveniente."
                    active={active} setActive={setActive}></Accordion>

                </div>
            </div>
            <Footer></Footer>    
        </div>
    )
}