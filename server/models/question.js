const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { optionSchema } = require('./options');



const questionSchema = new Schema({
    questionid: {
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    questiontype: {
        type: String,
        trim: true,
        required: true,

    },
    questiontext: {
        type: String,
        trim: true,
        required: true,
    },
    
    questioncorrectoptionid: {
        type: String,
        trim: true,
        
    },
    questionMarks: {
        type: Number,
        required: true,

    },
    questionOptions :[optionSchema],
    
    
    
});

const Question = mongoose.model('questions', questionSchema);



module.exports = { Question, questionSchema  };