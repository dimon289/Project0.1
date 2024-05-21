function game(turnX){
    var cells = document.querySelectorAll('.cell') 
    cells.forEach(element => {
    element.addEventListener("click",function(){
        if (element.innerHTML === ""){
            if(turnX){
                element.innerHTML = "x"
                element.classList.add("x")
                turnX = false
            }else{
                element.innerHTML = "o"
                element.classList.add("o")
                turnX = true
            }
        }
        
    }, {once:true})
    if (element.classList.contains("c0")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f0').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c1")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f1').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c2")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f2').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c3")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f3').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c4")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f4').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c5")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f5').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c6")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f6').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c7")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f7').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    } else if (element.classList.contains("c8")) {
        element.addEventListener("click",()=>{
            document.querySelectorAll(".f").forEach(element => {
                element.classList.add("unactive_ttt")
            });
            document.getElementById('f8').getElementsByClassName("f")[0].classList.remove("unactive_ttt");
        },{once: true})
    }
    cells = null
});} 
export default game