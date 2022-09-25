//Importación de modulos
const express = require('express');
const app = express();
require("dotenv").config()
const path = require('path')
const serviceApi = require('./public/js/pokeApi')

app.use(express.json())
app.use(express.static(__dirname + '/public'));


//Iniciar nuestro servidor
app.listen(process.env.PORT, () => {
    console.log(`El servidor esta iniciando en http://${process.env.HOST}:${process.env.PORT}`);
  });
  /*
  app.get("/", (req, res) => {
    let respuesta = {
      codigo: 200,
      status : "OK", 
      message: "Inicio de la app :D",
    }
    res.json(respuesta);
  })*/
  app.get("/", (req, res) => {
      res.sendFile(path.resolve(    __dirname, 'main.html'))
  })
  //endpoint inicial
  app.get("/pokemon",async function (req, res)  {
    try {
        let poke = await serviceApi.getPoke()
        res.send(poke)
    } catch (error) {
      let finalE = {
        message: "Ocurrió un error",
        error: error.message,
        
      }
      res.send(finalE)
    }
  })

