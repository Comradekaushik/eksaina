const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { questionSchema } = require('./question');



const testSchema = new Schema({
    testid: {
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    testdate: {
        type: Date,
        required: true,

    },

    testdescription: {
        type: String,
        trim: true,
        required: true,
    },

    testimagekey: {
        type: String,
        trim: true,

    },
    testended: {
        type: Boolean,
        required: true,

    },
    testnumberapplicants: {
        type: Number,
        required: true,

    },
    enrolleduserids: [{ type: String }],
    appeareduserids: [{ type: String }],
    questionbank : [questionSchema],

});

const Test = mongoose.model('tests', testSchema);

module.exports = Test;