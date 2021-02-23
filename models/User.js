const {Schema , model} = require('mongoose')

const userSchema = new Schema({
    id : {
        type : String ,
        trim : true ,
        required
    },
    password:{
        type:String,
        required: true,
    },

 })