const cityRouter = require('./cityRouter')
const countryRouter = require('./countryRouter')

const saveDataInDataBase = require('./saveData')


const routes = [

    {
        path: '/',
        handler : (req , res) => { res.json({ msg: 'All Good...'})}
    },
    {
        path: '/saveData',
        handler : saveDataInDataBase
    },
    {
        path: '/city',
        handler : cityRouter
    },
    {
        path: '/country',
        handler : countryRouter
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