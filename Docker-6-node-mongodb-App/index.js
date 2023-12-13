const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const routes = require('./routes/index.routes');

require('dotenv').config();

const app = express();


// app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));


app.use('/api', routes);


mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});


app.listen(process.env.PORT, () => console.log(`Server is running on port: http://localhost:${process.env.PORT}`));