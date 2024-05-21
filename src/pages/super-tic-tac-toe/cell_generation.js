import React from "react";

function cell(index,cindex){
    var cell_id =`${cindex}${index}`
    
    return <>
        <div id = {cell_id} className={`cell c${index}`}/>
    </>
}
export default cell
// onClick={changeClass(turn)}