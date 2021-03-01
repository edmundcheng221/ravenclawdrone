import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    render(){
        return(
            <section id="body">
                <div className="contact">
                    <br></br>
                    <h1 id="caption">Contact Us</h1>

                    <div class="wrapper">
                        <div id="error_message"></div>
                        <form id="myform">
                            <div class="input_field">
                                <input type="text" placeholder="Name" id="name"></input>
                            </div>
                            <div class="input_field">
                                <input type="text" placeholder="Subject" id="subject"></input>
                            </div>
                            <div class="input_field">
                                <input type="text" placeholder="Phone" id="phone"></input>
                            </div>
                            <div class="input_field">
                                <input type="text" placeholder="Email" id="email"></input>
                            </div>
                            <div class="input_field">
                                <textarea placeholder="Message" id="message"></textarea>
                            </div>
                            <div class="btn2">
                                <input type="submit"></input>
                            </div>
                        </form>
                    </div>


                    
                    <br></br>
                    
                </div>
                
                
            </section>
            

        )

    }
}

export default Contact