import React from 'react';
import { useState, useRef } from 'react';
import Tooltip from './Tooltip'

function TooltipText(props){

  //retorna un objeto que el valor se conserva aun cuando el componente se actualiza, se usa pasa asociar un elemento de la interfaz con la referencia creada
  let spanElement = useRef();
  let [tooltipDomRect, setTooltipDomRect] = useState();
  let [showTooltip,setShowTooltip] = useState(false);

  function handleMouseOver(){
    //retorna datos del elemento en el dom
    let domData = spanElement.current.getBoundingClientRect();
    setTooltipDomRect(domData)
    setShowTooltip(true)
  }

  return(
    <>
      <span 
        className="tooltip-text" 
        ref={spanElement} 
        onMouseLeave={(ev)=>{setShowTooltip(false)}}
        onMouseOver={ev => handleMouseOver(ev)} >
        {/* retorna un arreglo con todos los elementos que esten dentro del componente */}
          {props.children}
      </span>
      {
        showTooltip && <Tooltip domRect={tooltipDomRect} text={props.tooltip} />
      }
    </>
  )
}

export default TooltipText;