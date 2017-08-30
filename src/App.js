import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header.component';
import Footer from './Components/footer.component';
import Cal from './Components/calculator.component';

class App extends Component {
  constructor(){
    super();
    this.age=21;
    this.name="sutthipong";
    this.state = {name:"sutthipong",
                 age:20};
  }
  getVal(){
    return "getVal";
  }
  onClick(){
    this.setState({name:"BoB"});
  }
  setAge(e){
    const age = e.target.value;
    this.setState({'age':age});
  }
  render() {

    const name="Earth 5555";
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <Cal />
        
      </div>

      
      </div>
    );
  }
}

export default App;
