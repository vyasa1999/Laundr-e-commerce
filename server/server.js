const express = require('./config/express.js');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var path = require('path');
const CartRouter = require('./routes/cart.router.js');
const ProductsRouter = require('./routes/products.router.js');
const config = require('./config/config.js');
const {connectToDatabase} = require('./config/connectMongodb.js');
const bodyParser = require('body-parser');
 

//connect to mongo 
const db = connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
  db.once("open", () => {
    console.log("Successfully connected to mongoose database!");
    
  });
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.use(bodyParser.urlencoded({
    extended: true
}));
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

app.use(bodyParser.json());
/*
app.use(function(req,res){
  res.locals.session = req.session;
});
*/
app.use('/api/products', ProductsRouter);
app.use('/api/cart', CartRouter);
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
app.listen(port, () => console.log(`Server now running on port ${port}!`));