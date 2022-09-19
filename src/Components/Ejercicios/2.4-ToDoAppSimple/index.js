import React from 'react'
import Checkbox from './checkbox'

const SimpleToDoApp = () => {
  return (
    <div style={{marginTop:"100px"}}>
        <h2>SimpleToDoApp</h2>
        <Checkbox descripcion={"Primer Item"}/>
        <Checkbox descripcion={"Segundo Item"}/>
        <Checkbox descripcion={"Tercer Item"}/>
    </div>
  )
}

export default SimpleToDoApp 
