const express = require('express');
require('dotenv').config();


const app = express();


app.get('/', (req, res) => {
    res.send('Hello Docker from node');
});


app.listen(process.env.PORT, () => console.log(`app listening on port: http://localhost:${process.env.PORT}`));