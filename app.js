require("dotenv").config();
const express = require("express"); 
const app = express();
const port = process.env.APP_PORT || 3000; // ENV Config
const fileRouter = require('./routes/fileRouter');


// USE JSON in APP 
// app.use(express.json())


// set the view engine to ejs
app.set('view engine', 'ejs');


// App Home Route
app.get('/', (req, res) => {
    res.json("Welcome To Simple Bulk File Names Change with NodeJs!")
})

// User Router Here
app.use('/files', fileRouter)


// Server Listening
app.listen(port, ()=>{
    console.log(`Server started at port {${port}}`)
})