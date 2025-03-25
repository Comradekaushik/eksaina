const mongoose = require( 'mongoose');


const notificationSchema = new mongoose.Schema(

  {

    notificationId: {
      
      type: String,
      required: true,
      unique : true,
    },
    userId: {
      type: String,
      required: true,
      
    },

    testId: {
        type: String,
        required: true,
        
    },
    
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      
    },
    
    imagekey: {
      type: String,
      default:
        'no-image-key',
    },
 
  },
  { timestamps: true }
  
);

const Notification = mongoose.model('notifications', notificationSchema);


module.exports = Notification;