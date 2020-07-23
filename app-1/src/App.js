  import React, {Component} from 'react'
  import logo from './logo.svg';
  import './App.css';

  class App extends Component{
    constructor(){
      super()

    this.state = {
      message: "", 
      secondMessage: ""
    }
  }

  handleChange(value){
    this.setState({message: value})
  }

  handleSecondMessage(value){
    this.setState({secondMessage: value})
  }

  render(){
    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        <input onChange={e => this.handleSecondMessage(e.target.value)} type="text"/>
        <p>{this.state.message}</p>
        <p>{this.state.secondMessage}</p>
      </div>
    )
  }
}

export default App