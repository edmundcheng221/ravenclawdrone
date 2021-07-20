import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
    render(){
        return(

            <section className="productclass" id="productclass">
                <br></br>
                <h1 className="productheading">Key Features of Contactless Delivery Drone</h1>
                <br></br>
                <div id="productkeyfeatures">
                    <div id="encapsulate">
                        <li>Drone made out of carbon fiber</li>
                        <li>Soft Robotic gripper made from ecoflex</li>
                        <li>Actuated channels allow for the gripping of objects</li>
                        <img alt="gripper" id="image" src={require('../img/layoutGripper.png')}></img>
                    </div>
                    {/* <div>
                        
                    </div> */}
                </div>
                <br></br>

            </section>
       

        )

    }
}

export default Product