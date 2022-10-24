/**
 * El código comienza aquí. Ver el archivo README.txt para el paso a paso antes de llegar a este punto.
 * Si los 6 pasos anteriores no se han cumplido, es muy posible que la aplicación falle.
 * Este archivo es el punto de entrada de la aplicación web con node. Equivalente al Main de JAVA.   
 * Se realizan las importanciones de las librerías necesarias.
 * Se importa la librería de express que va a permitir gestionar los enrutamientos de nuestra app.
 * La librería Morgan nos va a mostrar el status code que establezcamos en el código para peticiones exitosas o con errores.
 * La librería Cors nos permite ....
 * La librería mongoose nos permitirá hacer las conexiones con nuestra base de datos en MongoDB (No relacional)
*/
const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
const mongoose = require('./connect'); // Esta importación sólo debería hacerse una vez tengamos creado el archivo de conexión a la base de datos de Mongo.

/**
 * Ahora se realizarán las configuraciones de la app que se necesitan para que funcione el backend
 * Primero indicamos con una constante llamada 'app' que express va a gestionar las rutas de la app.
 * Luego se crea una variable llamada env en la que procesaremos todo el entorno con el comando process.env
 * También se debe indicar un puerto en el que se pide que la app busque un puerto vacío o se inicie en el puerto 8080 (localhost)
 * De igual manera se indica que la app utilizará el método json de express, que va a utilizar Morgan y a Cors.
 */
const app = express();
const env = process.env;
const port = env.port || 8080;
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

/**
 * Ahora vamos con el arranque.
 * Para esto llamamos al método listen de nuestra app que va a recibir dos parámetros: el puerto y una función
 * La función flecha va a permitir que se generen acciones cuando la app empieza a correr
 */
app.listen(port, () => {
    console.log("Api corriendo en el puerto " + port);
});

/**
 * Finalmente le indicamos lo que queremos que se muestre en la ruta a través del método get de nuestra app.
 * El método llevará dos parámetros: un string con la ruta principal de nuestra app y una función flecha 
 * que recibe como parámetros el request y el response de la petición.
 * Para mostrar un mensaje en el navegador, cuando esté corriendo la app podemos utilizar el método send
 * de la respuesta de la petición
 */
app.get("/", (req, res) => {
    res.send("Api corriendo correctamente");
});

/**
 * Sólo cuando tenemos una petición creada en el archivo de ClientRouter.js tenemos que indicarle una dirección
 * a la app para acceder a la lista de clientes en este caso. Pero ahora llamamos el método use de la app y en 
 * sus parámetros le indicamos la ruta en formato string y un require que le dice que necesita el archivo
 * ClientRouters para que así muestre el método correcto del operations.
 */
app.use("/clients", require("./routers/ClientRouter"));
app.use("/users", require("./routers/UserRouter"));



