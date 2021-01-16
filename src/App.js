import { useEffect, useState } from 'react';
import './App.scss';
// import  {}  from "node-sass";



function App() {
  let hs = localStorage.getItem("highScore")
 
  const [score,setScore] = useState(null)
  const [highScore,setHighScore] = useState(hs)
 
    



  // Store info in localStorage .... :-)
  if(localStorage.getItem("highScore") < score){
    localStorage.setItem("highScore",score)
  }

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
    <>
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
    <div className="highScore">
      <h3>Maximum Score : {highScore}</h3>
      <h3>Your Score : {score}</h3>
      <div className="info red "></div><span>  10 Points</span><br/>
      <div className="info blue"></div><span>  5 Points</span><br/>
      <div className="info teal"></div><span>  1 Points</span><br/>
    
    </div>
    </>
  );
}

export default App;
