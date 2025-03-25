const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema({
    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      trim: true,
      
    },

    userid:{
        type: String,
        trim: true,
        required: true,
        unique: true,

    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minLength: 6,
    },

    admin : {
      type: Boolean,
      required: true,
      default: false,
    },
    
    
    accesskey: {
      type: String,
      trim: true,
      default: 'defaultAccessKey',
    },
});

const User = mongoose.model('users', userSchema);

module.exports = User;