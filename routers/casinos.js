var express = require('express')
var Casino = require('../models/casino')
var router = express.Router()

router.get('/', async (req, res) => {
    try {
        var casinos = await Casino.find({})
        res.json(casinos)
    }catch(e){
        console.log(e)
    }
    
})

router.get('/:id', async (req, res) => {
    const id = req.params.id // on récupère la valeure dans l'url
    const casino = await Casino.findOne({_id: id}) // on récupère le livre grâce à son _id
    res.json(casino)
 
})


router.post('/', (req, res) => {
    try{
        var casino = new Casino(req.body)
        casino.save()
        res.json(casino)
    }catch(e){
        console.log(e)
    }
})
module.exports = router;