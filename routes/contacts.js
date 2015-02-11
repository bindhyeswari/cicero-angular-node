var router = require('express').Router();

var contacts = [ {name: 'Christina', location: 'Sunnyvale'}, { name: 'Wei', location: 'Sunnyvale' }];

/* This route works with the path /contacts */

router.route('/')
.get(function(req, res) {

    })
.post(function (req, res) {
        console.log('Data sent from the front end: ');
        console.log(req.body);
        res.status(201).json({ message: 'Added contact' })
    })
.put(function (req, res) {

    })
.delete(function (req, res) {

    });


module.exports = router;