const mongoose = require('mongoose')

const questions = new mongoose.Schema({
    category : {type : String} ,
    question:{type:String} ,
    difficulty : {type : String} ,
    correct_answer : {type : String},
    incorrect_answers :[{type:String}]

},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('questions' , questions)
