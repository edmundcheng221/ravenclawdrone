import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <section id="footerbody">
                <div className="social">
                    <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.github.com"><i className="fab fa-github"></i></a>
                </div>
                <br></br>
                <div id="footercaption">
                    <p>@ Copyright 2021 Raven Claw Corporation</p>
                </div>
                <br></br>

            </section>


        )

    }
}

export default Footer