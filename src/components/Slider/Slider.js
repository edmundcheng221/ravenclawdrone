import React, { Component } from 'react';
import './Slider.css'

class Slider extends Component {
    render(){
        return(

            <section className="section-a" id="section-a">
                <div className="container">
                    <div>
                        <h1>Contactless Delivery Drone</h1>
                        <p>
                            Raven Claw leverages both drone and soft robotic technology
                            to develop a contactless delivery drone that is capable of gripping
                            and transporting ireegularly shaped payloads.
                        </p>
                        <a href="#body" className="btn">Contact Us</a>
                    </div>
                    <img alt="drone" src={require('../img/drone.png')}></img>
                </div>
                <br></br>
                <br></br>
            </section>
       

        )

    }
}

export default Slider