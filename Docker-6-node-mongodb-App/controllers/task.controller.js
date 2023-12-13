const Task = require('../models/task.model');


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log('title: ', title);
        console.log('description: ', description);
        const newTask = new Task({ title, description, completed: false });
        await newTask.save();
        res.status(200).send(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    getAllTasks,
    createTask
};