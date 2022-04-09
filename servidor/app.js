
//importo las variables de entorno

// require('dotenv').config()

import 'dotenv/config'

// importo la clase servidor 
import {} from './Server/Servidor.js' 

//crear un objeto de la clase servidor
let servidor = new Servidor()

// Despertar el servidor
servidor.despertarServidor()

