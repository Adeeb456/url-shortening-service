const mongoose = require('mongoose');

function connectToMongoDB(url){

    mongoose.connect(url)
    .then(()=>{
      console.log('Mongo DB connected!');
    })
    .catch((error)=>{
      console.log('Error occured while connecting to MongoDB : ',error);
    });
}

module.exports = {
    connectToMongoDB
};