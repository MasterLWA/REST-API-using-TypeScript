let express = require('express');
let http = require('http');
let bodyParser = require('body-parser');
let CookieParser = require('cookie-parser');
let Compression = require('compression');
let cors = require('cors');
let mongoose = require('mongoose');


const app = express();

//allow cross origin requests
app.use(
    cors({
        Credentials: true,
    }),
)

//configure app
app.use(bodyParser.json());
app.use(CookieParser());
app.use(Compression());


const server = http.createServer(app); //create server

//define port for server run
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


//path for mongodb
let mongoURL = 'mongodb+srv://admin:admin@research-buddy.yw0yvdp.mongodb.net/?retryWrites=true&w=majority'

//connect to mongodb
mongoose.promise = Promise; //overwrite mongoose promise
mongoose.connect(mongoURL);

try{
    //mongoose.connection.on('error',(error:Error) => console.log('MongoDB connection error: ${err}'));
    mongoose.connection.once('open', () => console.log('MongoDB connected!'));
}   catch (error) {
    console.log("Error is",error);
}
    
