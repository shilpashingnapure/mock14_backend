const express = require('express');
const connect = require('./config/db');
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const {storeQuestion , getQuestions} = require('./controller/questions.controller')


app.post('/storequestion' , storeQuestion)

app.get('/questions' , getQuestions)


const port = process.env.PORT || 5000
const start = async ()=>{
    await connect()
    app.listen(port, () => {

        console.log("port 5000..");
    });

}




start()