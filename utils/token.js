var jwt = require('jsonwebtoken')



const createAccessToken = (user) => {
    return new Promise((resolve, reject)=> {
        if(user._id===undefined) reject('Credentials not valid')
        else{
            const signedUser = {
                email: user.email,
                id: user._id
            }
            jwt.sign(signedUser, process.env.JWT_SECRET, {expiresIn: '7d'}, (error,token) => {
                if(error) reject (error)
                resolve(token)
            })

        }
    })
}

module.exports = createAccessToken