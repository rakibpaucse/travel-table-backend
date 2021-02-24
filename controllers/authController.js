const User = require('../models/User')

exports.signupGetController = (req , res , next ) => {

}

exports.signupPostController = async(req , res , next ) => {

    let studentid = '171054042' 
    let password = 'test123'   


    try {

        const hashedPassword = password
        const user = new User({ studentid , password})

        let createdUser = await user.save()
        console.log('User created Succesfully' , createdUser);     

    }
     catch (error) {
        console.log(error)
        next(error)
    }

}

exports.loginGetController = (req , res , next ) => {
     
}


exports.loginPostController = async (req , res , next ) => {
        let { studentid , password } = req.body

        try{
            let user = await User.findOne({studentid})
            console.log(studentid , password)
            if(!user){
              res.status(400).send({msg : 'Invalid Username or Password'})
            }

            let pass = ( password === user.password) ? true : false
            if(!pass){
              return res.status(400).send({msg: 'Invalid Username or Password'})
            }

            // req.session.islogin = true
            // req.session.user = user
            // req.session.save((err) => {
            //     if(err){
            //         console.log(err);
            //         return next(err)
            //     }
        
            //    return res.redirect('')
            // })
            const token = user.generateAuthToken()
            res.send(token)
        }
        catch(e){
            console.log(e);
            next(e)
        }
}

exports.logoutController = (req , res , next ) => {
    
    req.session.destroy((err) => {
        if(err){
            console.log(err);
            return next(err)
        }

       return res.redirect('')
    })
}