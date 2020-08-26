import React, {useState} from 'react';
import './App.css';

function App() {

    var [currentState, setState] =  useState({count: 69, color: "Blue"});
    
  function increase () {
    setState((prevState) => {
     return {...prevState, count: prevState.count + 1}
    })
  }

  function decrease () {
    setState((prevState) => {
      return {...prevState, count: prevState.count - 1}
    })
  }

  return (
    <div className="App">
      <div className="counter">
        <button onClick={decrease}>-</button>
        <span>{currentState.count}</span>
        <span>{currentState.color}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;
