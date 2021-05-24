const authRoute = require('./authRoute')
const orderRoute = require('./orderRoute')
const db = require('../database')

const routes = [
    {
        path : '/student',
        handler : authRoute
    },
    {
        path : '/orders',
        handler : orderRoute
    },
    {
        path: '/',
        handler : async(req , res) => {
            const students = await db.query('SELECT * FROM `students`');
            console.log(students)
        
            res.json({ msg: 'All Good...'})
        }
    }
]

module.exports = app => {
    routes.forEach( route => {
        if(route.path === '/'){
            app.get(route.path , route.handler)
        }else{
            app.use(route.path , route.handler)
        }
    })
}