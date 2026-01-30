let countEl = document.getElementById("count-el")
let save = document.getElementById("save")
let count = 0

function btnClicker (){
    count += 1
    countEl.textContent = count
    
    

}

function saveBtn (){
    save.textContent = count
    count+= 0
    
    
}



