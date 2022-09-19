import React from "react";
import { NavLink } from "react-router-dom"

const Home = () => {
    return(
        <>
            <div>
                <h2>Bruno Beltramone</h2>
                <NavLink to="/List">1.1-List</NavLink><br/><br/>
                <NavLink to="/ColorChange">2.1-ColorChange</NavLink><br/><br/>
                <NavLink to="/HeaderAndFooter">2.2-HeaderAndFooter</NavLink><br/><br/>
                <NavLink to="/WeatherApp">2.3-WeatherApp</NavLink><br/><br/>
                <NavLink to="/SimpleToDoApp">2.4-SimpleToDoApp</NavLink><br/><br/>
                <NavLink to="/EventManagment">2.5-EventManagment</NavLink><br/><br/>
                <NavLink to="/ReactEstilos">2.7-ReactEstilos</NavLink><br/><br/>
                <NavLink to="/Hoc">3.1-Hoc</NavLink><br/><br/>
                <NavLink to="/ToDoApp">3.2-ToDoApp</NavLink><br/><br/>
                <NavLink to="/LifeCycle">3.3-LifeCycle</NavLink><br/><br/>
                <NavLink to="/ConditionalRender">3.4-ConditionalRender</NavLink><br/><br/>
            </div>
        </>
    )
}

export default Home