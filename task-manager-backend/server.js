
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');




const app = express();

app.use(cors());
app.use(express.json());



// Middlewares

// database connection 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDb"))
    .catch(err => console.log('Mongo connection error:',err) );




// Routes will go there 


app.get('/',(req,res) => {
    res.send('Task Manager APi is working');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));