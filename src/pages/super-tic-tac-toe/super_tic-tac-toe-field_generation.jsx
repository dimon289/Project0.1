import React from "react";
import field_generation from "./tic-tac-toe-field_generation";
export var iswon = false
export var wintext=" "
function super_field_generation(){

    function handleClick(){
        var winnerImgs = document.querySelectorAll(".ff")
        if((winnerImgs[0].classList.contains("xwon") && winnerImgs[1].classList.contains("xwon") && winnerImgs[2].classList.contains("xwon"))
        ||(winnerImgs[0].classList.contains("xwon") && winnerImgs[3].classList.contains("xwon") && winnerImgs[6].classList.contains("xwon"))
        ||(winnerImgs[0].classList.contains("xwon") && winnerImgs[4].classList.contains("xwon") && winnerImgs[8].classList.contains("xwon"))
        ||(winnerImgs[1].classList.contains("xwon") && winnerImgs[4].classList.contains("xwon") && winnerImgs[7].classList.contains("xwon"))
        ||(winnerImgs[2].classList.contains("xwon") && winnerImgs[5].classList.contains("xwon") && winnerImgs[8].classList.contains("xwon"))
        ||(winnerImgs[2].classList.contains("xwon") && winnerImgs[4].classList.contains("xwon") && winnerImgs[6].classList.contains("xwon"))
        ||(winnerImgs[3].classList.contains("xwon") && winnerImgs[4].classList.contains("xwon") && winnerImgs[5].classList.contains("xwon"))
        ||(winnerImgs[6].classList.contains("xwon") && winnerImgs[7].classList.contains("xwon") && winnerImgs[8].classList.contains("xwon"))){
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
                element.style.filter = "blur(0)"
            });
            wintext="Виграли X"
            iswon = true
            document.getElementById("winnerForm").style.zIndex=1
        }
    
        if((winnerImgs[0].classList.contains("owon") && winnerImgs[1].classList.contains("owon") && winnerImgs[2].classList.contains("owon"))
        ||(winnerImgs[0].classList.contains("owon") && winnerImgs[3].classList.contains("owon") && winnerImgs[6].classList.contains("owon"))
        ||(winnerImgs[0].classList.contains("owon") && winnerImgs[4].classList.contains("owon") && winnerImgs[8].classList.contains("owon"))
        ||(winnerImgs[1].classList.contains("owon") && winnerImgs[4].classList.contains("owon") && winnerImgs[7].classList.contains("owon"))
        ||(winnerImgs[2].classList.contains("owon") && winnerImgs[5].classList.contains("owon") && winnerImgs[8].classList.contains("owon"))
        ||(winnerImgs[2].classList.contains("owon") && winnerImgs[4].classList.contains("owon") && winnerImgs[6].classList.contains("owon"))
        ||(winnerImgs[3].classList.contains("owon") && winnerImgs[4].classList.contains("owon") && winnerImgs[5].classList.contains("owon"))
        ||(winnerImgs[6].classList.contains("owon") && winnerImgs[7].classList.contains("owon") && winnerImgs[8].classList.contains("owon"))){
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
                element.style.filter = "blur(0)" 
            });
            wintext="Виграли O"
            iswon = true
            document.getElementById("winnerForm").style.zIndex=1
        }
    }
    var super_field = []
    for (let index = 0; index < 9; index++) {
        super_field.push(field_generation(`f${index}`))
    } 
    return (<div id="super_field" onClick={handleClick}> {super_field} </div>)
    

}
export default super_field_generation