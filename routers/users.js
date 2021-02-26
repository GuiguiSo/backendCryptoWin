var express = require('express')
const userModel = require('../models/user')
var User = require('../models/user')
var router = express.Router()
router.get('/', async (req, res) => {
    try {
        var users = await User.find({})
        res.json(users)
    }catch(e){
        console.log(e)
    }
    
})
router.post('/', (req, res) => {
    try{
        var user = new User(req.body)
        user.save()
        res.json(user)
    }catch(e){
        console.log(e)
    }
})
module.exports = router