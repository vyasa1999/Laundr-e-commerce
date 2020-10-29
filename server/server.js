const express = require('./config/express.js')
const LandingRouter = require('./routes/landing.router.js')
const ProductsRouter = require('./routes/products.router.js')
const config = require('./config/config.js')
const {connectToDatabase} = require('./config/connectMongodb.js')
const bodyParser = require('body-parser')
 

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

app.use(bodyParser.json());

app.use('/', LandingRouter);
//app.use('/product', ProductsRouter);

app.all('/*', (req, res) => {
  res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('.client/public/index.html'))
});

app.listen(port, () => console.log(`Server now running on port ${port}!`));