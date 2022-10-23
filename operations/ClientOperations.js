/**
 * En este archivo tendremos las operaciones CRUD (Create, Read, Update y Delete) de nuestro backend.
 * Lo primero que debemos hacer es importar la librería de express y el modelo de cliente 
 */
const { json } = require('express');
const clientModel = require('../models/ClientModel');

/**
 * Ahora creamos una constante tipo objeto para incluirle las operaciones CRUD como métodos que serán a su vez
 * funciones flecha asíncronas
 */
const clientOperations = {};

// Crear
/** 
 * Para la operación de crear, insertar o CREATE un registro nuevo dentro de nuestra coleccion  clientes.
 * Hay que recordar que la colección se creó automáticamente cuando llamamos el get a la base de datos de Mongo
 * por primera vez.
 * Lo primero que hay que hacer es definir un objeto dumie para probar el funcionamiento de nuestro endpoint.
 * 
*/
clientOperations.createClient = async (req, res) => {

}


// Listar
/**
 * Para la operación de buscar, listar, ver o READ debemos crear una constante que ejecute el método find
 * aplicado al modelo de cliente creado en la carpeta modelos. Esto debe hacerse dentro de un try-catch para el
 * control de errores. Esto se puede dejar sencillo (hasta la línea 1), pero se le puede incluir un mensaje 
 * y un status de error si la lista está vacía con un if (a partir de la línea 2).
 * Los status se pueden setear con el método status del response y el contenido se puede mostrar en el navegador
 * con el método send. 
 */
clientOperations.readClients = async (req, res) => {
    try {
        const clientsList = await clientModel.find(); // Línea 1
        if(clientsList > 0) {  // Línea 2
            res.status(200).send(clientsList);
        } else {
            res.status(404).send("No hay clientes registrados");
        }
    } catch (error) {
        res.status(400).send("Hubo un error en la conexión a la Base de datos." + error);
    }
}


// Actualizar
/**
 * 
 */
clientOperations.updateClient = async (req, res) => {


}


// Eliminar
/**
 * 
 */
clientOperations.deleteClient = async (req, res) => {


}

module.exports = clientOperations;













