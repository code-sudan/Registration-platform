const express = require('express');
const mongoose = require('mongoose');
//const students = require('./models/students');

// database connection
mongoose.connect('mongodb://localhost/platform');
let db = mongoose.connection;
// check connection
db.once('open', () =>{
    console.log('connected to database');
});
const app = express();
// json middleware
app.use(express.json());
let Student = require('./models/students');
let Course = require('./models/courses');
// get all students data
app.get('/all', (req, res) => {
    Student.find({}, (err, students) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(students)
        }
    });
});

// get student by id
app.get('/students/:id', (req, res) =>{
    Student.findById(req.params.id, (err, student) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(student);
            // res.send(novel);
        }
    });
});

// post new student
app.post('/addstudent', (req, res) => {
    let student = new Student({
        userName : req.body.userName,
        email : req.body.email,
        phoneNumber : req.body.phoneNumber,
        password : req.body.password,
        courseName : req.body.courseName
    }); 
    student.save( (err) => {
        if(err){
            console.log(err);
        }
        else {
            //req.flash('message', 'book added successfully');
            res.send(student);
        }
    });
});

// update students data
app.post('/editStudent/:id', (req, res) => {
    let student = {};
    student.userName = req.body.userName,
    student.email = req.body.email,
    student.phoneNumber = req.body.phoneNumber,
    student.password = req.body.password,
    student.courseName = req.body.courseName

    let query = {_id : req.params.id}
    Student.update(query, student, (err) => {
        if(err){
            res.send(err);
            return;
        }
        else {
            res.send(student);
        }
    });
});

// delete student
app.delete('/delete/:id' , (req, res) => {
    let query ={ _id: req.params.id}

    Student.remove(query, (err) =>{
        if(err){
            console.log(err);
        }
        else {
            res.send('Deleted successfully');
        }
    })
})
// start listening 
app.listen(3000, () => {
    console.log(' platform started on port 3000 ');
})