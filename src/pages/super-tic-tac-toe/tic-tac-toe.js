import React from "react";
import ReactDOM from "react-dom";
import field_generation from "./super_tic-tac-toe-field_generation" 
import "./tic-tac-toe.css"
import game from "./game";


function tic_tac_toe(){

  return <>
    <main> 
      <div className='main_block'>
        <div className='game_container'>

          <div id="playground">{field_generation()}</div>
          
          <div id="start_button" onClick={()=>{
            document.getElementById("start_button").style.zIndex = -1
            document.getElementById("playground").style.filter = "blur(0)"
            game()
          }}>Start</div>

          <div id="winner_form4x" className="winttt_form">
            <p id="winner_p4x" className="winttt_p">congratulations for X</p>
            <div id="winner_btn4x"className="winttt_btn" onClick={()=>{
              return field_generation()
            }}>next game</div>
          </div>

          <div id="winner_form4o" className="winttt_form">
            <p id="winner_p4o" className="winttt_p">congratulations for O</p>
            <div id="winner_btn4o"className="winttt_btn" onClick={()=>{
              document.getElementById("winner_form4o").style.zIndex = -1
              document.getElementById('super_field').remove()
              ReactDOM.render(field_generation(), document.getElementById('playground'))
              document.getElementById('start_button').style.zIndex= 1
            }}>next game</div>
          </div>
        </div>
      </div>
    </main>  
  </>
}

export default tic_tac_toe