var express = require('express')
var router = express.Router()
var User = require('../models/user')
var sha256 = require('js-sha256')
var createAccessToken = require('../utils/token')
var dotenv = require('dotenv')
dotenv.config()

router.get('/:email', async(req,res)=>{
    const user = await User.findOne({email: req.params.email})
    const t = Date.now()
    const challenge = sha256(user._id + t + req.params.email)
    res.json({ challenge: challenge })
})

router.post('/', async(req,res)=>{
    const {challenge, result, email} = req.body
    const user = await User.findOne({email: email})
    const verified = sha256(user.password+challenge+ process.env.CHALLENGE_SECRET)
    if(verified === result){
        //creer le token
        const token = await createAccessToken(user)
        res.json({token: token})
    }else{
        res.json(403).send({status: 'Forbideen'})
    }

})

module.exports = router