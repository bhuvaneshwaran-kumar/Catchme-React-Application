import { useEffect, useState,useRef } from 'react';
import './App.scss';
// import  {}  from "node-sass";



function App() {
  let hs = localStorage.getItem("highScore")
 
  const [score,setScore] = useState(null)
  const [highScore,setHighScore] = useState(hs)

  // USE-STATE FOR SETTING HEIGHT AND WIDTH OF THE GAME.
  const [height,setHeight] = useState(null) 
  const [width,setWidth] = useState(null) 


  
  const outer = useRef()
  const Green = useRef()
  const Yellow = useRef() 
  const Red = useRef() 
  const brown = useRef()



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


  // AN USEEFFECT WHICH HAS THE FUNCTIONS THAT MOVES THE CONTAINER.
  let gid,yid,rid,bid
 useEffect(()=>{

  let GreenposTB = 0
  let GreenposLR = 0
  let YellowposTB = 40
  let YellowposLR = 100
  let RedposTB = 80
  let RedposLR = 0
  let BrownposTB = 100
  let BrownposLR = 0
 

  // SETING THE ELEM MOVE IN TOP || BOTTOM AND LEFT || RIGHT --START ---//
  let RmoveRight = false
  let Rmoveleft = true
  let Rmovebottom = true
  let Rmovetop = false
  let YmoveRight = false
  let Ymoveleft = true
  let Ymovebottom = true
  let Ymovetop = false
  let GmoveRight = false
  let Gmoveleft = true
  let Gmovebottom = true
  let Gmovetop = false
  let BmoveRight = false
  let Bmoveleft = true
  let Bmovebottom = true
  let Bmovetop = false
  // SETING THE ELEM MOVE IN TOP || BOTTOM AND LEFT || RIGHT --END--//

  // A ID INCASE IF WE WANT TO STOPINTERVAL IN FUTURE.
 

  function frameGreen() {

    if(Gmovetop){
      if (GreenposTB === 0 ) {
        Gmovebottom = true
        Gmovetop = false
      } 
      else 
      {
        GreenposTB--;
        Green.current.style.top = GreenposTB + 'px';  
      }
    }
    if(Gmovebottom){
      if (GreenposTB === height - 30 ) {
        Gmovebottom = false
        Gmovetop = true
      } 
      else 
      {
        GreenposTB++;
        Green.current.style.top = GreenposTB + 'px';   
      }
    }
    if(Gmoveleft){
      if (GreenposLR === width - 30 ) {
        Gmoveleft = false
        GmoveRight = true
      } 
      else 
      {
        GreenposLR++;
        Green.current.style.left = GreenposLR + 'px'; 
      }
    }
    if(GmoveRight){
      if (GreenposLR === 0) {
        Gmoveleft = true
        GmoveRight = false
      } 
      else 
      {
        GreenposLR--;
        Green.current.style.left = GreenposLR + 'px'; 
      }
    }

    }
  
  function frameYellow() {

    if(Ymovetop){
      if (YellowposTB === 0 ) {
        Ymovebottom = true
        Ymovetop = false
      } 
      else 
      {
        YellowposTB--;
        Yellow.current.style.top = YellowposTB + 'px';  
      }
    }
    if(Ymovebottom){
      if (YellowposTB === height - 30 ) {
        Ymovebottom = false
        Ymovetop = true
      } 
      else 
      {
        YellowposTB++;
        Yellow.current.style.top = YellowposTB + 'px';   
      }
    }
    if(Ymoveleft){
      if (YellowposLR === width - 30 ) {
        Ymoveleft = false
        YmoveRight = true
      } 
      else 
      {
        YellowposLR++;
        Yellow.current.style.left = YellowposLR + 'px'; 
      }
    }
    if(YmoveRight){
      if (YellowposLR === 0) {
        Ymoveleft = true
        YmoveRight = false
      } 
      else 
      {
        YellowposLR--;
        Yellow.current.style.left = YellowposLR + 'px'; 
      }
    }

    }
    
    function frameRed() {

      if(Rmovetop){
        if (RedposTB < 0 ) {
          Rmovebottom = true
          Rmovetop = false
        } 
        else 
        {
          RedposTB = RedposTB - 2;
          Red.current.style.top = RedposTB + 'px';  
        }
      }
      if(Rmovebottom){
        if (RedposTB > height - 30 ) {
          Rmovebottom = false
          Rmovetop = true
        } 
        else 
        {
          
          RedposTB++;
          Red.current.style.top = RedposTB + 'px';   
        }
      }
      if(Rmoveleft){
        if (RedposLR === width - 30 ) {
          Rmoveleft = false
          RmoveRight = true
        } 
        else 
        {
          RedposLR++;
          Red.current.style.left = RedposLR + 'px'; 
        }
      }
      if(RmoveRight){
        if (RedposLR === 0) {
          Rmoveleft = true
          RmoveRight = false
        } 
        else 
        {
          RedposLR--;
          Red.current.style.left = RedposLR + 'px'; 
        }
      }
  
      }  
   
    function frameBrown() {

      if(Bmovetop){
        if (BrownposTB < 0 ) {
          Bmovebottom = true
          Bmovetop = false
        } 
        else 
        {
          BrownposTB = BrownposTB - 2;
          brown.current.style.top = BrownposTB + 'px';  
        }
      }
      if(Bmovebottom){
        if (BrownposTB > height - 30 ) {
          Bmovebottom = false
          Bmovetop = true
        } 
        else 
        {
          
          BrownposTB++;
          brown.current.style.top = BrownposTB + 'px';   
        }
      }
      if(Bmoveleft){
        if (BrownposLR  === width - 30 ) {
          Bmoveleft = false
          BmoveRight = true
        } 
        else 
        {
          BrownposLR ++;
          brown.current.style.left = BrownposLR  + 'px'; 
        }
      }
      if(BmoveRight){
        if (BrownposLR  === 0) {
          Bmoveleft = true
          BmoveRight = false
        } 
        else 
        {
          BrownposLR --;
          brown.current.style.left = BrownposLR  + 'px'; 
        }
      }
  
      }  
   
  
  if(width !== null){
    gid = setInterval(frameGreen,40)
    yid = setInterval(frameYellow,30)
    rid = setInterval(frameRed,25)
    bid = setInterval(frameBrown,25)
  }
  
 },[width])


 function endGame(){
    clearInterval(gid)
    clearInterval(yid)
    clearInterval(rid)
    clearInterval(bid)
    if(score >= hs){
      alert(`🚀🚀🚀🚀Your Score : ${score} is the highest One`)
      window.location.reload()
    }
    else{
      alert("sorry : you lost 😢😢😢")
      window.location.reload()
    }
 }

  useEffect(()=>{
    alert(`
    Welcome to catch-me..🚀🚀🚀
    click(catch) the moving bals and get the point's
    🏀- 10 points
    🟢- 1 point
    🟡- 5 points
    🟤- danger you're out
    make sure you click in the center of the balls..
    `)
    let hg = outer.current.offsetHeight
    let wd = outer.current.offsetWidth
    setHeight(hg)
    setWidth(wd)
  },[])
  return (
    <>
    <div ref={outer} className="outer">
   
    <div ref={Green} onClick={calcSore} className="conatainer1">

    </div>
    <div ref={Yellow} onClick={calcSoreTwo} className="conatainer2">

    </div>
    <div ref={Red} onClick={calcSoreThree} className="conatainer3">

    </div>
    <div ref={brown} onClick={endGame} className="conatainer4">

    </div>
    <div className="App">

      <div className="countScore">

        <h3>Score : <span>{score}</span></h3>
        <div className="spinner">
   
        </div>
      </div>

    </div>
    <div className="highScore">
      <h3>Maximum Score : {highScore}</h3>
      <h3>Your Score : {score}</h3>
      <div className="row">
      <span>10 Points</span>
      <span>5 Points</span>
      <span>1 Points</span>
      <span>Danger</span>
      </div>
    
    </div>
    </div>   
    </>
  );
}

export default App;
