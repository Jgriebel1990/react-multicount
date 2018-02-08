import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
        count: 0
    }
    this.incrementThree = this.incrementThree.bind(this);

    this.incrementTwo = this.incrementTwo.bind(this);

    this.increment = this.increment.bind(this);

    this.reset = this.reset.bind(this);

  }

increment(){
  this.setState({count: this.state.count + 1});
}

incrementTwo(){
  this.setState({count: this.state.count + 2});
}

incrementThree(){
  this.setState({count: this.state.count + 3});
}

reset(){
  this.setState({count: this.state.reset = 0});
}
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>1</button>
        <button onClick={this.incrementTwo}>2</button>
        <button onClick={this.incrementThree}>3</button>
        <button onClick={this.reset}>Reset!@#!@#!@#@!#!!!!!!!!!</button>
      </div>
    );
  }
}

export default App;
