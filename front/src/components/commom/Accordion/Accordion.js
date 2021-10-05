import React from 'react';
import "../Accordion/Accordion.css"

export function Accordion({title, text, active, setActive}) {
    
    return(
        <div className="corpo-accordion">
            <div className="accordion">
                <div className="accordionHeading" onClick={() => setActive(title)}>
                    <div className="container" onClick={() => setActive(title)}>
                        <p><strong>{title}</strong></p>
                        <span onClick={() => setActive(title)}>
                            {active === title ? "X" : "|||"}
                        </span>
                    </div>
                </div>
            </div>
            <div className={(active === title ? "show" : "") + " accordionContent"}>
                <div className="container-accordion"><p>{text}</p></div>
            </div>
        </div>
    )
}
