const moneyTxt = document.getElementById("money-counter")
const clickPowdis = document.getElementById("clickPow")
const buymenu = document.getElementById("buyMenu")


let money = 0;
let clickPow = 1
clickPowdis.innerText = clickPow


function clickBulb () {
money += clickPow

moneyTxt.innerText = money
}

function add10Click() {
    if(money >= 10) {
        clickPow += 1
        money -= 10
        clickPowdis.innerText = clickPow
        moneyTxt.innerText = money
        console.log("money is: " + money+ "\n clickpow is: " +  clickPow)
    } else {
        alert("Get more money please")
    }
}

// buymenu.innerHTML += "<div><h1> hei sann</h1></div>"