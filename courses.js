let mongoose = require('mongoose');

let coursesSchema = mongoose.Schema({
    trackName:{
        type: String,
        required: true
    },
    courseName:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    instructor:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
});

let Course = module.exports = mongoose.model('Course', coursesSchema);