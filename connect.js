/**
 * Este archivo es con el que se hace la conexión a la base de datos en Mongo
 * Para eso se guarda en una constante la librería de Mongoose para hacer la conexión a la base de datos
 */
const mongoose = require('mongoose');

/**
 * Luego se ponen los datos necesarios de la base de datos en constante para luego hacer la conexión.
 * Se setea el username (con el usuario que se creó para la base de datos)
 * Se setea el password (con el password que se creó para la base de datos)
 * Se pone un nombre de base de datos. Si la base no existe, Mongo la crea por debajo.
 * Se setea la URI con el enlace de conexión que proporciona Mongo, pero se reemplazan los valores 
 * de usuario y password con las variables creadas anteriormente concatenadas. Adicionalmente, entre el / y el
 * signo ? en la string de conexión se concatena la variable de la base de datos que se quiere usar o crear
 */
const username = "admin";
const password = "admin";
const database = "Serviplus_db";
const URI = "mongodb+srv://"+username+":"+password+"@juanvicluster.qrxfpac.mongodb.net/"+database+"?retryWrites=true&w=majority";

/**
 * Luego se crea una función asincrónica (ya que debe esperar que la base de datos responda) con el fin de
 * guardar la respuesta de la conexión exitosa o no a la base de datos. Hay dos maneras de hacerlo:
 * El clásico try{}catch(error){}.
 * En este caso se utiliza un await para que la función espere que haya respuesta de la conexión para ejecutarse
 * La ejecución se hace llamando el método connect de mongoose y se le pasa el parámetro de la URI 
 * (la string de conexión de Mongo)
 * En el try, si la conexión es correcta se puede enviar un console.log que confirme la conexión
 */
const conect = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Atlas está en línea");
    } catch (error) {
        console.log("Error de conexión " + error);
    }
}

/**
 * Finalmente se llama a la función y se exporta el módulo mongoose para poderlo utilizar en la aplicación 
 * y generar las operaciones CRUD.
 * OJO no va a servir hasta que no se importe el módulo en index.js!!!
 */
conect();
module.exports = mongoose;