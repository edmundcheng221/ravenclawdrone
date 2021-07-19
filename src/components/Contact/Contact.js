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
                        <form id="myform" action="https://formsubmit.co/ec3219@nyu.edu" method="POST">
                            <div class="input_field">
                                {/* <input type="text" placeholder="Name" id="name"></input> */}
                                <input type="text" name="name" placeholder="Name" id="name" required></input>
                            </div>
                            <div class="input_field">
                                <input type="text" placeholder="Subject" id="subject" required></input>
                            </div>
                            <div class="input_field">
                                <input type="text" placeholder="Phone" id="phone" required></input>
                            </div>
                            <div class="input_field">
                                <input type="text" name="email" placeholder="Email" id="email" required></input>
                            </div>
                            <div class="input_field">
                                <textarea name="message" placeholder="Message" id="message" required></textarea>
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