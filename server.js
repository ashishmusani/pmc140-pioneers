const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, './client/build')));

//const dbConnectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dgglj.mongodb.net/symposium?retryWrites=true&w=majority`;
const dbConnectionUrl = `mongodb+srv://im_admin:HAkqPt8yOHjQn6GI@cluster0.dgglj.mongodb.net/symposium?retryWrites=true&w=majority`;
mongoose.connect(dbConnectionUrl, {'useNewUrlParser': true, useUnifiedTopology: true } );
const Attendee = require('./models/attendeeModel');
const User = require('./models/userModel');
const Question = require('./models/questionModel');


app.listen(PORT, ()=>{
  console.log("Server listening on port " + PORT)
})

app.post('/api/login', (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username, password}, (err, user) => {
    console.log(user);
    if(user){
      res.status(200).send("Success");
    } else {
      res.status(401).send("Incorrect credentials")
    }
  })

})


app.get('/api/attendees', (req,res)=>{
      Attendee.find((err, attendees) => {
        res.send(attendees)
      })
    })
    .post('/api/attendees', (req,res)=>{
      const newAttendee = req.body;
      Attendee.create(newAttendee, (err,data)=>{
        if(err){
          return res.status(500).send(err);
        } else {
          return res.status(200).send(data)
        }
      })
    })

app.get('/api/attendees', (req,res)=>{
      Attendee.find((err, attendees) => {
        res.send(attendees)
      })
    })
    .post('/api/attendees', (req,res)=>{
      const newAttendee = req.body;
      Attendee.create(newAttendee, (err,data)=>{
        if(err){
          return res.status(500).send(err);
        } else {
          return res.status(200).send(data)
        }
      })
    });

app.get('/api/questions', (req,res)=>{
    Question.find((err, questions) => {
      res.send(questions)
    })
  })
  .post('/api/questions', (req,res)=>{
    const newQuestion = req.body;
    Question.create(newQuestion, (err,data)=>{
      if(err){
        return res.status(500).send(err);
      } else {
        return res.status(200).send(data)
      }
    })
  })


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});