import React from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './Img.js'

function App() {
  return (
    <div className="App">
      <Img img1={'https://http.cat/409'}/>
      <Img img1={'https://http.cat/400'}/>
    </div>
  );
}

export default App;
