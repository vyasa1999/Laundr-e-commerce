const express = require('./config/express.js');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var path = require('path');
const CartTester = require('./routes/cart.router.js')
const CartRouter = require('./routes/cart.router.js');
const ProductsRouter = require('./routes/products.router.js');
const UserRouter = require('./routes/user.router.js');
const config = require('./config/config.js');
const {connectToDatabase} = require('./config/connectMongodb.js');
const bodyParser = require('body-parser');

// Passport includes
var passport = require('passport');
var crypto = require('crypto');
var LocalStrategy = require('passport-local').Strategy;
const User = require('./models/customer.model.js');
const { model } = require('./models/customer.model.js');
//connect to mongo 
const db = connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
db.once("open", () => {
    console.log("Successfully connected to mongoose database!");
    
});

//express init
const app = express.init()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use env port or default

const port = process.env.PORT || 5000;

//session init

const sessionStore = new MongoStore({mongooseConnection: db, collection: 'sessions'})
app.use(session({
  secret: config.session.Secret,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 1 // 1 day
  },
  store: sessionStore,
  resave: false, //Edit these when making accounts
  saveUninitialized: true
}));
//passport initialization
passport.use(new LocalStrategy(
  function(username, password, cb){
    User.findOne({username: username})
      .then((User) => {
        if(!User) {return cb(null, false)}

        const isValid = validPassword(password, user.hash, user.salt);
        if (isValid){
          return cb(null, User);
        } else {
          return cb(null, false);
        }
      })
      .catch((err) => {
        cb.err;
      });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    if (err) {return cb(err);}
    cb(null, user);
  });
});





app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', UserRouter);
app.use('/api/products', ProductsRouter);
app.use('/api/cart', CartRouter);

app.use('/tests/cart', CartTester);

app.use('/home', (req,res) => {
  console.log(req.session);
  req.session.views++;
  res.send(`<h1>Home  ${req.session.views}</h1>`)
});

/*
app.all('/*', (req, res) => {
  res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('./client/public/index.html'))
});
*/
function validPassword(password, hash, salt) {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash === hashVerify;
}
function genPassword(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  
  return {
    salt: salt,
    hash: genHash
  };
}
app.listen(port, () => console.log(`Server now running on port ${port}!`));
