import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      foods: ['bananas', 'bread', 'lettuce', 'milk', 'cerial']
    }
  }

  handleChange(value){
    this.setState({foods: value})
  }

  render(){
    let myFood = this.state.foods.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return(
      <div className="App">{myFood}</div>
    )
  }
}

export default App