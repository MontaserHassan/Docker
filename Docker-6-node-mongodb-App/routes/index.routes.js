const express = require('express');


const taskController = require('../controllers/task.controller');


const router = express.Router();


router.get('/docker', (req, res) => res.send('Hello from Node.js and MongoDB and Docker!'));
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);


module.exports = router;