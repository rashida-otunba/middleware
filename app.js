const http = require('http');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = morgan('tiny');

const app = express();
const server = http.createServer(app);
const HOST = '127.0.0.1';
const PORT = 3000;

app.use(logger);
app.use(helmet());

app.set('view engine', 'ejs')

app.use(express.static('public')); // gives you a public folder to place images 

app.use((req,res,next)=>{
    console.log(`request at ${new Date()}`)
    next (); 
});

// const indexRoute=require('./routes/index');
// app.use('/', indexRoute);

app.use('/', require('./routes/index'))  //same as above
app.use('/shows', require('./routes/shows'));

// app.use('*', (req, res, next)=>{ // app.logger will handle this 
//     console.log(`${req.method} ${req.path}`);
//     next(); // this is passing the baton to the app.get 
// })

app.get('/', (req, res) => {
    res.send('Hi');
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});