import "./Slide.css";
import slide1 from "./slide1.jpg"
import slide2 from "./slide2.jpg"
import slide3 from "./slide3.jpg"

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'


export function Slide(props)
{
    var items = [
        {
            name: "Porções de amor, de colher em colher.",
            description: "À dorê vem das memórias, do carinho e saudade que moram em cada receita. Contamos histórias que criam uma fatia de bolo ou transparecem no cuidado que é preparar uma refeição. ",
            subtitule: "Entregamos ingredientes, receitas, memórias e amor para preparo.",
            img: slide1,
        },
        {
            name: "Porções de amor, de colher em colher.",
            description: "À dorê vem das memórias, do carinho e saudade que moram em cada receita. Contamos histórias que criam uma fatia de bolo ou transparecem no cuidado que é preparar uma refeição. ",
            subtitule: "Entregamos ingredientes, receitas, memórias e amor para preparo.",
            img: slide2,
        },
        {
            name: "Porções de amor, de colher em colher.",
            description: "À dorê vem das memórias, do carinho e saudade que moram em cada receita. Contamos histórias que criam uma fatia de bolo ou transparecem no cuidado que é preparar uma refeição. ",
            subtitule: "Entregamos ingredientes, receitas, memórias e amor para preparo.",
            img: slide3,
        }
    ]

    

    return (
        <Carousel>
            {  
                items.map( (item, i) => <Item key={i} item={item} /> )     
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className="paper">
            <div className="conteudo">
                <h2 className="title">{props.item.name}</h2>
                <p className="legenda">{props.item.description}</p>
                <p className="legenda-bold">{props.item.subtitule}</p>
            </div>
            <img className="background" src={props.item.img}/>
        </Paper>
    )
}