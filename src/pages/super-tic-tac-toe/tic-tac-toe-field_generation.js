import React from "react";
import cell from "./cell_generation";
import X from"./pictures/x.png"
import O from "./pictures/o.png"

function field_generation(findex){
    var field = []
    for (let index = 0; index < 9; index++) {
        field.push(cell(index,findex))
    }
    return <div id={findex} className="ff" onClick={(event)=>{
        var cells = document.getElementById(`${findex}`).querySelectorAll(".cell")
        if((cells[0].classList.contains("x") && cells[1].classList.contains("x") && cells[2].classList.contains("x")) 
        || (cells[0].classList.contains("x") && cells[3].classList.contains("x") && cells[6].classList.contains("x"))
        || (cells[0].classList.contains("x") && cells[4].classList.contains("x") && cells[8].classList.contains("x"))
        || (cells[1].classList.contains("x") && cells[4].classList.contains("x") && cells[7].classList.contains("x"))
        || (cells[2].classList.contains("x") && cells[5].classList.contains("x") && cells[8].classList.contains("x"))
        || (cells[2].classList.contains("x") && cells[4].classList.contains("x") && cells[6].classList.contains("x"))
        || (cells[3].classList.contains("x") && cells[4].classList.contains("x") && cells[5].classList.contains("x"))
        || (cells[6].classList.contains("x") && cells[7].classList.contains("x") && cells[8].classList.contains("x"))) {
            if(!(document.getElementById(`${findex}`).classList.contains("owon"))){
                document.getElementById(`img${findex}x`).classList.add('xwon')
                document.getElementById(`${findex}`).classList.add('xwon')
            }
        } 
        
        if((cells[0].classList.contains("o") && cells[1].classList.contains("o") && cells[2].classList.contains("o")) 
        || (cells[0].classList.contains("o") && cells[3].classList.contains("o") && cells[6].classList.contains("o"))
        || (cells[0].classList.contains("o") && cells[4].classList.contains("o") && cells[8].classList.contains("o"))
        || (cells[1].classList.contains("o") && cells[4].classList.contains("o") && cells[7].classList.contains("o"))
        || (cells[2].classList.contains("o") && cells[5].classList.contains("o") && cells[8].classList.contains("o"))
        || (cells[2].classList.contains("o") && cells[4].classList.contains("o") && cells[6].classList.contains("o"))
        || (cells[3].classList.contains("o") && cells[4].classList.contains("o") && cells[5].classList.contains("o"))
        || (cells[6].classList.contains("o") && cells[7].classList.contains("o") && cells[8].classList.contains("o"))){
            if(!document.getElementById(`${findex}`).classList.contains("xwon")){
                document.getElementById(`img${findex}o`).classList.add("owon")
                document.getElementById(`${findex}`).classList.add('owon')
            }
        }
    }
        
    }><img id={`img${findex}x`}className="imgttt" src={X}/>
    <img src={O}id={`img${findex}o`} className="imgttt"/><div className="f"> {field} </div></div>
}
export default field_generation