import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Soy el Constructor");
    this.state = { title: "Buenos Dias" };
  }
  componentDidMount() {
    console.log("Acabo de Nacer. ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("Me actualizo Todo el tiempo. ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Chau Chau, Me voy. ComponentWillUnmount");
  }
  render() {
    setTimeout(() => {
      this.setState({ title: "Buenas Noches" });
    }, 2000);
    console.log("Estoy Renderizando");
    return <>{this.state.title}</>;
  }
}
export default LifeCycle;
