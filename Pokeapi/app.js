const url = "https://pokeapi.co/api/v2/pokemon/"



// gets api data
async function getData(fullUrl) {
    // waits till api is reached
    let response = await fetch(fullUrl)
    let data = await response.json()
    if (response.ok != true){
        // if okay is not. throw error
        console.error("couldnt reach api")
    } else if (response.status === 404) {
        // no data. throw error
        console.error("Not found. error 404")
    } else {

        buildPokemon(data)
        return data
    }
}

getData(url + "charizard")
getData(url + "vulpix")
getData(url + "wartortle")

const pokeCont = document.querySelector("#poke-container")


function buildPokemon (pokemon) {
const div = document.createElement("div")
div.className = "pokeKort"
div.style.backgroundColor = "#02aa22"

let controllerAudio = audiocreator(pokemon)
const img = document.createElement("img")
console.log(pokemon)
img.src = pokemon.sprites.front_default


div.appendChild(img)
div.appendChild(controllerAudio)
pokeCont.appendChild(div)
}

// creates audio part
function audiocreator(pokemon) {
const audioFile = document.createElement("audio")
const source = document.createElement("source")

// gets pokemon cry
source.src = pokemon.cries.legacy
audioFile.append(source)
audioFile.controls = true
return audioFile
}