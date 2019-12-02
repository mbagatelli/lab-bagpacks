import React, { Component } from "react";
import "./App.css";
import products from "./products.js";
import Section from "./components/bagpacks.jsx";

class App extends Component {
  render() {
    return (
      <div className='card-deck-wrapper'>
        <div className='card-deck '>
          <div class='row'>
            {products.map(product => {
              return <Section message={product} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
