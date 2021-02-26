import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
    render(){
        return(

            <section className="productclass">
                <br></br>
                <h1 className="productheading">Key Features of Contactless Delivery Drone</h1>
                <br></br>
                <div id="productkeyfeatures">
                    <div>
                        <li>Drone made out of carbon fiber</li>
                        <li>Soft Robotic gripper made from ecoflex</li>
                        <li>Actuated channels allow for the gripping of objects</li>
                    </div>
                    <div>
                        <img id="image" src={require('../img/layoutGripper.png')}></img>
                    </div>
                </div>
                <br></br>

            </section>
       

        )

    }
}

export default Product