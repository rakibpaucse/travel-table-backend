const express = require('express')
const PORT = 8080;
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const MONGO_URI = `mongodb+srv://lekhapora:${lekhapora}@cluster0.nblcl.mongodb.net/${lekhapora}?retryWrites=true&w=majority`

const setRoutes = require('./routers/controlRouter')

// 

const app = express()

const store = new MongoDBStore({
    uri: MONGO_URI,
    collection: 'sessions'
  });

const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended:true}),
    express.json(),
    session({
        secret : process.env.SECRET_KEY || 'SECRET_KEY',
        resave: false,
        saveUninitialized : false,
        store
    }),
]

app.use(middleware)

setRoutes(app)

app.use((req , res , next) => {
    let err = new Error('404, file not found')
    err.status = 404
    next(err)
})


mongoose.connect(MONGO_URI,{useNewUrlParser: true , useUnifiedTopology: true})
            .then( () => {
                app.listen( process.env.PORT || PORT , () => {
                    console.log(`Server is running on port ${PORT} and dataBase Connected`)
                })
            })
            .catch( (e) => {
                console.log(e)
            })