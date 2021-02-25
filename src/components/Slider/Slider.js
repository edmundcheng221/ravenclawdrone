import React, { Component } from 'react';
import './Slider.css'

class Slider extends Component {
    render(){
        return(

            <section class="section-a">
                <div class="container">
                    <div>
                        <h1>Contactless Delivery Drone</h1>
                        <p>
                            Raven Claw leverages both drone and soft robotic technology
                            to develop a contactless delivery drone that is capable of gripping
                            and transporting ireegularly shaped payloads.
                        </p>
                        <a href="#" class="btn">Contact Us</a>
                    </div>
                    <img src={require('../img/drone.png')}></img>
                </div>
            </section>

        )

    }
}

export default Slider