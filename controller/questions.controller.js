
const Question = require('../models/questions.model')

const storeQuestion = async (req , res)=>{
    try{
        const Q = await Question.create(req.body);
        return res.send(Q)
    }catch(e){
        return res.status(500).send(e.message)
    }
}

const getQuestions = async (req , res)=>{
    const {category , difficulty} = req.query
    try{
        // console.log(category , difficulty)
        const Q = await Question.find({category , difficulty })
        return res.send(Q)
    }catch(e){
        return res.status(500).send(e.message)
    }
}





module.exports = {storeQuestion , getQuestions}