const express = require('express');
const router = express.Router();
const constants = require('../constants/constants');

const saveMessageToDbHandler = require('../handlers/saveMessage');

router.post(constants.saveMessageToDbRoute, saveMessageToDbHandler);



module.exports = router;