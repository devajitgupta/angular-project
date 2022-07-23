const express = require('express');
const app = express();
const bookRoute = require('./node-backend/routes/book.routes')

path = require('path')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
mongoDb = require('./database/db');

mongoose.Promise = global.Promise;

mongoose.connect(mongoDb.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("database connected successfully")

},
error=>{
    console.log("database error: " + error)
}
);
// all my book routes 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false

}));

app.use(cors());

app.use(express.static(path.join(__dirname,'dist/bookStore')));

// craete api route

app.use('/api',bookRoute);

//create a port

const port= process.env.port || 8000 

 app.listen(port,()=>{
    console.log("listening port is on:  "+ port)
})