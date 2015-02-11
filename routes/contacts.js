var router = require('express').Router();

var contacts = [ {name: 'Christina', location: 'Sunnyvale'}, { name: 'Wei', location: 'Sunnyvale' }];

/* This route works with the path /contacts */

router.route('/')
.get(function(req, res) {
        res.status(200).json(contacts);
    })
.post(function (req, res) {
        console.log('Data sent from the front end: ');
        console.log(req.body);

        contacts.push(req.body);

        res.status(201).json({ message: 'Added contact' })
    })
.put(function (req, res) {

    })
.delete(function (req, res) {

    });


router.get('/nonangular', function (req, res) {
    res.render('nonangular');
});

module.exports = router;