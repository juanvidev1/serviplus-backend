/**
 * Este archivo va a tener el modelado de datos de los clientes de nuestra aplicación
 * Lo primero que debemos hacer es importar a mongoose en una constante
 */
const mongoose = require('mongoose');

/**
 * Ahora debemos crear un esquema de datos que le va a especificar a la app los detalles de los datos que va a
 * llevar cada registro de cliente.
 * Se crea como una constante que va a llevar el método Schema de mongoose con el que vamos a modelar los datos.
 * Este modelo se pasa como un parámetro del método Schema en formato de objeto {"key1":"value1", "key2":"value2"}
 * Y cada dato va ser otro objeto en el que va a llevar el tipo de dato, tamaño (no aplica en números), si es requerido
 * y si es único (cuando uno de los datos es único se evitará que haya registros duplicados cuando se cree uno nuevo)
 */
const clientSchema = mongoose.Schema({
    identification_number: {type: String, maxLength: 10, required: true, unique: true},
    identification_type: {type: String, maxLength: 35, required: true, unique: false},
    first_name: {type: String, maxLength: 60, required: true, unique: false},
    last_name: {type: String, maxLength: 60, required: true, unique: false},
    username: {type: String, maxLength: 50, required: true, unique: false},
    password: {type: String, maxLength: 30, required: true, unique: false},
    email: {type: String, maxLength: 80, required: true, unique: true},
    address: {type: String, maxLength: 60, required: true, unique: false}
});

/**
 * Una vez se tenga el esquema se exporta el módulo para poder ser utilizado en la app.
 * Esto se hace llamando el método de model de mongoose y pasándole como parámetros el nombre de la colección
 * en la base de datos (si no existe, la app la creará).
 * Y el segundo parámetro es el esquema creado anteriormente
 */
module.exports = mongoose.model("clients", clientSchema);