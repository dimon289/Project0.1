import React,{useState} from "react";
import FieldGeneration, { wintext }from "./super_tic-tac-toe-field_generation" 
import "./tic-tac-toe.css"
import game from "./game";


export var turnX = true
export default function Tic_tac_toe(){
   
  function start_button(){
    document.getElementById("start_button").style.zIndex = -1
            document.getElementById("super_field").style.filter = "blur(0)"
            game(turnX)
  }
  var i = 0
  console.log(i)
  const[playground,setPlayground]=useState(<FieldGeneration key={Date.now()}/>)
  const[win,setWin]=useState(wintext)
  return <>
    <main> 
      <div className='main_block'>
        <div className='game_container'>
          <div id="playground">{playground}</div>
          <div id="start_button" onClick={start_button}>Start</div>
          <div id="winnerForm"className="winttt_form" onMouseEnter={()=>{setWin(wintext)}}>
            <p>{win}</p>
            <div onClick={()=>{
              i+=1
              document.getElementById("winnerForm").style.zIndex=-1
              document.getElementById("start_button").style.zIndex=1
              document.getElementById("super_field").style.filter = "blur(5px)"
              turnX = true
              console.log(i)
              setPlayground(<FieldGeneration key={Date.now()}/>)}}>Почати нову гру</div></div>
        </div>
      </div>
    </main>  
  </>
}

