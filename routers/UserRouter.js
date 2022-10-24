const userOperations = require('../operations/UsersOperations');
const clientOperations = require('../operations/UsersOperations');
const router = require('express').Router();

router.get("/", userOperations.listUsers);
router.post("/", userOperations.createUser);

module.exports = router;