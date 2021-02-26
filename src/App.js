import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

import './App.css';

class App extends Component {
  render() {
    return (
      <body id="whole">
        <div className="App">
          <Navbar />
          <Slider />
          <Product />
          <About />
          <Contact />
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
