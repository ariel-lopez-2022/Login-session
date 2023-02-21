const mongoose = require('mongoose')
const UsersCollection = ('users')

const UserSchema = new mongoose.Schema({
    firstneme:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
   
    
    userEmail:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
    

})

const UserModel = mongoose.model(UsersCollection, UserSchema )

module.exports = UserModel;