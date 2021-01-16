import { useState } from 'react';
import './App.scss';
// import  {}  from "node-sass";



function App() {

  const [score,setScore] = useState(null)

  function calcSore(){
    setScore((prev)=>prev+1)
  }
  function calcSoreTwo(){
    setScore((prev)=>prev+5)
  }
  function calcSoreThree(){
    setScore((prev)=>prev+10)
  }

  return (
    <div className="outer">
   
    <div onClick={calcSore} className="conatainer1">

    </div>
    <div onClick={calcSoreTwo} className="conatainer2">

    </div>
    <div onClick={calcSoreThree} className="conatainer3">

    </div>
    <div className="App">

      <div className="countScore">

        <h4>Score : <span>{score}</span></h4>
        <div className="spinner">
   
        </div>
      </div>

    </div>
    </div>
  );
}

export default App;
