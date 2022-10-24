const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_identification: {type: String, maxLength: 10, required: true, unique: true},
    user_identification_type: {type: String, maxLength: 35, required: true, unique: false},
    user_full_name: {tyoe: String, maxLength: 90, required: true, unique: false},
    user_login: {type: String, maxLength: 40, required: true, unique: false},
    user_password: {type: String, maxLength: 20, required: true, unique: false},
    email: {tyoe: String, maxLength: 40, required: true, unique: true},
    admin: {type: Boolean, required: true, unique: false},
    agent: {type: Boolean, required: true, unique: false}
});

module.exports = mongoose.model("users", userSchema);