const express = require('express')
var cors = require('cors');
const PORT = 8081;
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
// const MongoDBStore = require('connect-mongodb-session')(session);
const MONGO_URI = `mongodb+srv://travelTable:travelTable@cluster0.bb9fa.mongodb.net/travelTable?retryWrites=true&w=majority`

const setRoutes = require('./routers/controlRouter')

const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended:true}),
    express.json(),
    session({
        secret : process.env.SECRET_KEY || 'SECRET_KEY',
        resave: false,
        saveUninitialized : false
    }),
]

app.use(middleware);
app.use(cors())
setRoutes(app)

app.get('/', (req, res) => {
    res.send('hello world')
  })

mongoose.connect(process.env.MONGO_URI || MONGO_URI,
            {useNewUrlParser: true , useUnifiedTopology: true})
            .then( () => {
                app.listen( process.env.PORT || PORT , () => {
                    console.log(`Server is running on port ${PORT} and dataBase Connected`)
                })
            })
            .catch( (e) => {
                console.log(e)
            })


 


