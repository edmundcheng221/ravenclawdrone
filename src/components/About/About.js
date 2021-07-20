import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render(){
        return(
            // <body id="section">
                <div className="contact">
                    <h1 className="Heading">The Raven Claw Team</h1>
                    <br></br>
                    <div id="team">
                        <div>
                            <img alt="ashton" id="employee" src={require('../img/placeholder.png')}></img>
                            <p className="caption">Ashton Chan</p>
                            <p className="caption">FEA Analyst</p>
                            <p className="caption">B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img alt="edmund" id="employee" src={require('../img/edmund.png')}></img>
                            <p className="caption">Edmund Cheng</p>
                            <p className="caption">Software & Design Engineer</p>
                            <p className="caption">B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img alt="emma" id="employee" src={require('../img/placeholder.png')}></img>
                            <p className="caption">Emma Rock</p>
                            <p className="caption">Project Manager</p>
                            <p className="caption">B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img alt="jeff" id="employee" src={require('../img/placeholder.png')}></img>
                            <p className="caption">Jeffrey Virula-Garcia</p>
                            <p className="caption">Lead Engineer</p>
                            <p className="caption">B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img alt="jonathan" id="employee" src={require('../img/placeholder.png')}></img>
                            <p className="caption">Jonathan Reyes</p>
                            <p className="caption">Research Engineer</p>
                            <p className="caption">B.S. Mechanical Engineering</p>
                        </div>
                        <div>
                            <img alt="winnie" id="employee" src={require('../img/placeholder.png')}></img>
                            <p className="caption">Winnie Tsui</p>
                            <p className="caption">Design Engineer</p>
                            <p className="caption">B.S. Mechanical Engineering</p>
                        </div>
                    </div>
                    <br></br>
                </div>
            // </body>
        )

    }
}

export default About