
//importación de módulo


// Declararación de variables 
const url = "https://pokeapi.co/api/v2/pokemon/"
const principal = document.getElementById("principal")
console.log(url)



document.addEventListener('DOMContentLoaded', buscar(), false)

function buscar() {
    let input = document.getElementById('search').value
    getPoke(input)
    
}

async function getPoke(pokemon){
    let resultPoke = url + pokemon
    fetch(resultPoke)
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < resultPoke.length; i++) {
                const myDiv = document.createElement('div')
                myDiv.className = 'div-mostrar'
                const para = document.createElement('h1')
                para.textContent = `${json.results[i].name}`
                console.log(json.results[i].name)
                myDiv.appendChild(para)
                principal.appendChild(myDiv)
            }
        }).catch(err => {
            console.error("Error: ", err)
        })
}


