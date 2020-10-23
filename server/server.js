const express = require('./config/express.js')
const router = require('./routes/examples.server.routes.js')
const config = require('./config/config.js')
const {connectToDatabase} = require('./database/connectMongodb.js')
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
app.use('/api', router);
app.listen(port, () => console.log(`Server now running on port ${port}!`));

