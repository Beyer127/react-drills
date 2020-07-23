import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

  class App extends Component{
    constructor(){
      super();

      this.state = {
        filterString: '',
        foods: ['bananas', 'bread', 'lettuce', 'milk', 'cerial']
      }
    }

    handleChange(filter){
      this.setState({filterString: filter})
    }

    render(){
      let filteredFoods = this.state.foods.filter(e => {
        return e.includes(this.state.filterString)
      }).map((e, i) => {
        return <h2 key={i}>{e}</h2>
      })
      return(
        <div className="App">
          {filteredFoods}
          <input onChange={e => this.handleChange(e.target.value)}/>
        </div>
      )
    }
  }

export default App;
