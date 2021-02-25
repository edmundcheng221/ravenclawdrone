import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <Contact />
      </div>
    );
  }
}

export default App;
