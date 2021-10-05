import { Footer } from "../../commom/Footer/Footer";
import { Navegador } from "../../commom/Navegador/Navegador";
import { Slide } from "../../commom/Slide/Slide.js";
import { Orcamento } from "../../commom/Orcamento/Orcamento";
import { Feedback } from "../../commom/Feedback/Feedback";

export function Home(){
    return(
        <>
            <Navegador></Navegador>
            <Slide></Slide>
            <Orcamento></Orcamento>
            <Feedback></Feedback>
            <Footer></Footer>
        </>
    );
}