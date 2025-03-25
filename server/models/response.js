const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    responseid: {
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    userid: {
        type: String,
        trim: true,
        required: true,

    },
    testid:{
        type: String,
        trim: true,
        required: true,

    },

   
    responsetimestart: {
        type: Date,
        required: true,

    },
    responsetimeend: {
        type: Date,
        

    },
    responses : [{
        questionid : String,
        questionoptionidortext : {
            type : String,
            default : "not-attempted",
        },
    }]




});

const Response = mongoose.model('responses', responseSchema);

module.exports = Response;