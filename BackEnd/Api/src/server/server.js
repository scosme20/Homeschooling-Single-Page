const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors())
app.use(express.json())

const  conn = require('../database/conn')

conn()

const routes = require('../routes/routes')

app.use('/api', routes)

app.listen(3500, () => {
    console.log('Server is running on port 3500')
})

//l5qGBQe72sWL6cwr




