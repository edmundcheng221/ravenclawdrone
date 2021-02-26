import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render(){
        return(
            <body id="section">
                <div className="contact">
                    <h1 className="Heading">The Raven Claw Team</h1>
                    <br></br>
                    <div id="team">
                        <div>
                            <img id="employee" src={require('../img/edmund.png')}></img>
                            <p className="caption">Edmund Cheng, B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img id="employee" src={require('../img/edmund.png')}></img>
                            <p className="caption">Edmund Cheng, B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img id="employee" src={require('../img/edmund.png')}></img>
                            <p className="caption">Edmund Cheng, B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img id="employee" src={require('../img/edmund.png')}></img>
                            <p className="caption">Edmund Cheng, B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img id="employee" src={require('../img/edmund.png')}></img>
                            <p className="caption">Edmund Cheng, B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img id="employee" src={require('../img/edmund.png')}></img>
                            <p className="caption">Edmund Cheng, B.S. Mechanical Engineering</p>
                        </div>
                    </div>
                    <br></br>
                </div>
            </body>
        )

    }
}

export default About