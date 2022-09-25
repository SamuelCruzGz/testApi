//exportación de función
module.exports = { getPoke};
//importación de módulo
const fetch = require('node-fetch')

// Declararación de variables 
const url = process.env.pokeApi



function buscar() {
    let input = document.getElementById('search')
    getPoke(input)
    
}

async function getPoke(pokemon){
    let resultPoke = url + busqueda
    console.log(resultPoke)
}

