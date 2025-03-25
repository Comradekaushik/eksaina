const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    optionid: {
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    
    optiontext: {
        type: String,
        trim: true,
        required: true,
    },
    
    
    
    
    
});

const Option = mongoose.model('options', optionSchema);

module.exports = { Option, optionSchema };