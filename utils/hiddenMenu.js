function hiddenMenu () {

    const containerTitle = document.getElementById("startMenuContainer")
    const title = document.getElementById("title")
    containerTitle.setAttribute("hidden", "")
    title.setAttribute("hidden", "")

    let elemntsDiv = document.getElementById("actionsMenu").children

    for(let elem of elemntsDiv){
        elem.setAttribute("hidden", "")
        const div = document.getElementById("actionsMenu")
        div.setAttribute("hidden", "")
    }

    let createdBy = document.getElementById('createdBy')

    createdBy.hidden = true
    
}

export default hiddenMenu; 