var express = require('express')
var bodyParser = require('body-parser')
var routerUsers = require('./routers/users')
var routerCasinos = require('./routers/casinos')
var mongoose = require('mongoose')
var app = express()
var authRouter = require('./routers/auth')
var dotenv = require ('dotenv')
dotenv.config()

mongoose.Promise = Promise

mongoose.connect('mongodb+srv://-----mdp sur teams--------/b2dev?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('connecte to mongodb Atlas'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    next();
})

app.use('/users', routerUsers)
app.use('/casinos', routerCasinos)
app.use('/auth', authRouter)


app.listen(3001, () => {
    console.log('server running on 3001')
})


