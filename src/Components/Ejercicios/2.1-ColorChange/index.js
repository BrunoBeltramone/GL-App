import React from "react";
import { ColorContainer } from "./colorChange_style";

class ColorChange extends React.Component {
    constructor(){
        super();
        this.state = {color: "Red"}
    }

    
    render(){

        setTimeout(() => {
            this.setState({color : "Green"})
        }, 5000);
        
        return(
            <>
            <h1>Presta atencion, en unos segundos el color va a pasar de rojo a Verde</h1>
            <ColorContainer color={this.state.color}>Color: {this.state.color}</ColorContainer>
            </>
        )
    }
}

export default ColorChange