import React from "react";
import { NavLink } from "react-router-dom"

const Home = () => {
    return(
        <>
            <div>
                <h2>Los links a los Ejercicios estan abajoo</h2>
                <NavLink to="/List">1.1-List</NavLink><br/><br/>
                <NavLink to="/ColorChange">2.1-ColorChange</NavLink><br/><br/>
                <NavLink to="/HeaderAndFooter">2.2-HeaderAndFooter</NavLink><br/><br/>
                <NavLink to="/WeatherApp">2.3-WeatherApp</NavLink><br/><br/>
                <NavLink to="/EventManagment">2.5-EventManagment</NavLink><br/><br/>
            </div>
        </>
    )
}

export default Home