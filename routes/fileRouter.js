const express = require('express');
const fileRouter = express.Router();
const fileController = require('../controllers/fileController');
 

// This is Protected Route
fileRouter.get('/', (req, res) => { fileController.getAll(req, res)})
fileRouter.get('/rename-all', (req, res)=> { fileController.renameAll(req, res)})

module.exports = fileRouter;