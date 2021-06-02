let mongoose = require('mongoose');

let studentsSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    }
});

//afb30d18670dcd64

let Student = module.exports = mongoose.model('Student', studentsSchema);