import React from 'react'

class LifeCycle extends React.Component {
    constructor(props){
        super(props)
        console.log("Soy el Constructor")
        this.state = { title: "Buenas Tardes" }
    }
    componentDidMount(){
        console.log("Acabo de Nacer")
    }
    componentDidUpdate(){
        console.log("Me actulizo Todo el tiempo paa")
    }

    componentWillUnmount(){
        console.log("Nos re re vimos")
        
    }
    render() {
        // setTimeout(() => {
        //     this.setState({title : "Buenas Noches"})
        // }, 2000);
        console.log("Estoy RENDERIZANDO")
        return(
            <>
                {this.state.title}
            </>
        )
    }
}
export default LifeCycle