const mongoose = require('mongoose')

//Schema creating for user

const userScheama = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'name is required'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
},
{timestamps: true}
);

const userModel = mongoose.model('users',userScheama)

module.exports = userModel
