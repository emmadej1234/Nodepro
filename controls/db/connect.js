const mongoose = require('mongoose')



const connectString = 'mongodb+srv://Ayodeji:Deji123@cluster0.xxrph.mongodb.net/?retryWrites=true&w=majority'


// mongoose.connect(connectString)
// .then(()=>console.log("connected to DB"))
// .catch((err)=> console.log(err))


function onConnect() {
    console.log("connected to DB");
}

function onError(err) {
    console.log(err);
}

mongoose.connect(connectString, onConnect, onError);


module.exports = onConnect;

