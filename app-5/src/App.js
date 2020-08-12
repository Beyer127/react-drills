import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Img from "./Img.js";

function App() {
  return (
    <div className='App'>
      <Img img1={"https://http.cat/409"} />
      <Img img1={"https://http.cat/400"} />
      <Img
        url={
          "https://www.georgiaaquarium.org/wp-content/uploads/2018/09/longcomb-sawfish-3-500x500.jpg"
        }
      />
    </div>
  );
}

export default App;
