const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const session=require('express-session');
const AWS = require('aws-sdk');
require('dotenv').config();
 
const  crypto = require('crypto')
  , fs = require('fs');
  const {Sequelize}=require('sequelize');

  /*mysql database connection */
  const sequelize=new Sequelize('databse1','root','Brotik1234',{
     dialect:'mysql',
    host:'localhost',
  });


const corsoptions={
  "origin": "http://localhost:8080",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials":true,
};
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/user_database',
  collection: 'user_sessions'
});
store.on('error', function(error) {
  console.log(error);
});

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/user_database')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    store:store,
    saveUninitialized: false,
    cookie: { expires : new Date(Date.now() + 604800000) }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors(corsoptions));
app.use(bodyParser.json())

var User = require('./modelsmongo/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/loginerror',(req,res)=>{
res.json({error:true});

});
app.get('/data',(req,res)=>{
  res.json({data:'shivam'});
});

app.post('/form',(req,res)=>{
console.log(req.body);
res.send(req.body);

});
const Usersql=require('./models');

//route for registering 
app.post('/register',(req,res)=>{
var userId=0;
  const Usersql=require('./models');
  Usersql.User.create({

    email:req.body.email,
    username:req.body.username
  }).then(result=>{
  userId=result.dataValues.id;
  console.log(userId+'djsdj');


     User.register(new User({ username : req.body.username}), req.body.password, function(err, user) {
     if (err) {
       console.log(err);
     }
    console.log('itworked');
     passport.authenticate('local')(req, res, function (err,user) {
     });
     if(err){
         console.log('error occured ');}
     });
     res.json({user_id:userId,redirect:true});

});

   });


   function generateAccessToken(username) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    }

app.post('/login',(req,res)=>{
            passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json({redirect:false,authenticated:false}); }
      else {
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        else{
          const token = generateAccessToken({ username: req.body.username });
          Usersql.User.


        return res.json({redirect:true,authenticated:true,token:token});
      }
      });
    }
    })(req, res);










});



app.get('/logout',(req,res)=>{
  req.logout();
    res.json({redirect:true});

});


app.listen(8081,()=>{
 console.log('server running on 8081');
});
