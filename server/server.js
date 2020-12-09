const express = require('./config/express.js');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var path = require('path');
const config = require('./config/config.js');
const stripe = require('stripe')(config.Stripe.SID);
const CartTester = require('./routes/cart.router.js')
const CartRouter = require('./routes/cart.router.js');
const ProductsRouter = require('./routes/products.router.js');
const UserRouter = require('./routes/user.router.js');
const StripeRouter = require('./routes/stripe.router.js');
const {connectToDatabase} = require('./config/connectMongodb.js');
const bodyParser = require('body-parser');

// Passport includes
var passport = require('passport');
var crypto = require('crypto');
var LocalStrategy = require('passport-local');
var User = require('./models/customer.model.js');
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
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/auth', UserRouter);
app.use('/api/products', ProductsRouter);
app.use('/api/cart', CartRouter);
app.use('/api/stripe', StripeRouter);

app.use('/tests/cart', CartTester);

/*
app.use('/home', (req,res) => {
  console.log(req.session);
  req.session.views++;
  res.send(`<h1>Home  ${req.session.views}</h1>`)
});

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
