import { Component } from "react";
import "./taxi.css";
import Taxi from "./taxi.js"

class App extends Component{
  render(){
    return(
      <div className="parent">
        <Taxi/>
      </div>
    );
  }
}

export default App;
