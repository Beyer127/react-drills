import React, {Component} from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super();

    this.state = {
      food: ['bananas', 'bread', 'milk', 'cerial']
    }
  }


  render(){
    let myFood = this.state.food.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return(
      <div className='App'>{myFood}</div>
    )
  }
}

export default App