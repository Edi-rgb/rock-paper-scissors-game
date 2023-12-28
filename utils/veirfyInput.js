

function verifyInput (e){

    if(e.target.value === ""){
        startBtn.setAttribute("disabled", "")
    } else {
        startBtn.removeAttribute("disabled")

    }

}

export default verifyInput; 