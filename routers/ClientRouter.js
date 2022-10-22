/**
 * En este archivo vamos a generar las rutas para las peticiones que haremos a nuestra aplicación.
 * Lo primero es importar el archivo ClientOperations.js y almacenarlo en una constante y también se
 * importa express con su método Router() en una constante llamada router.
 */
const clientOperations = require('../operations/ClientOperations');
const router = require('express').Router();

/**
 * Ahora podemos definir las peticiones y la operación del clientOperations que ejecutarán, según la petición hecha
 * En este caso tenemos la petición get que tendrá como parámetros una ruta (en este caso la raíz "/") y el método
 * de clientOperations que va a ejecutar... Para el get sería el de listar clientes (la función readClients)
 */
router.get("/", clientOperations.readClients);



// Finalmente se exporta el módulo router
module.exports = router;