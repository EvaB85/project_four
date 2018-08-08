const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const passport = require('./config/passportConfig.js');
const session = require('express-session')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
})


app.get('/', (req, res) => {
  console.log('Get / Hit')
  console.log(req.user)
    res.json({
        status: 'session cookie not set'
    });
});

app.get('/login', (req, res) => {
  console.log('FAILED ROUTE LOGIN')
})

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login']
}));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('RETURN FROM GOOGLE')
    res.redirect('/');
  });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
