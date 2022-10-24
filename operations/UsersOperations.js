const { json } = require('express');
const UserModel = require('../models/UserModel');
const clientModel = require('../models/UserModel');
const clientOperations = require('./ClientOperations');

const userOperations = {}

// Create
userOperations.createUser = async (req, res) => {
    try {
        const obj = {
            user_identification: "1023456789",
            user_identification_type: "Cédula",
            user_full_name: "Pablo Ramirez",
            user_login: "pabloramirez",
            user_password: "12345",
            email: "pablor@mail.com",
            admin: false,
            agent: true
        }
        //const obj = req.body
        const user = new clientModel(obj);
        const userSave = await user.save();
        res.status(201).send(userSave);
    } catch (error) {
        res.status(400).send("Error creando usuario " + error);
    }
}

// List
userOperations.listUsers = async (req, res) => {
    try {
        const userList = await UserModel.find();
        if (userList.length > 0) {
            res.status(200).send(userList);
        } else {
            res.status(404).send("No hay usuarios creados");
        }
    } catch (error) {
        res.status(400).send("Hubo un problema con la petición. " + error);
    }
}



module.exports = userOperations;