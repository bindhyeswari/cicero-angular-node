var router = require('express').Router();
var uuid = require('node-uuid');

var contacts = [ {name: 'Christina', location: 'Sunnyvale', _id: uuid.v4()}, { name: 'Wei', location: 'Sunnyvale', _id: uuid.v4() }];

/* This route works with the path /contacts */


router.route('/')
.get(function(req, res) {
        res.status(200).json(contacts);
    })
.post(function (req, res) {
        console.log('Data sent from the front end: ');
        console.log(req.body);

        req.body._id = uuid.v4();
        contacts.push(req.body);

        res.status(201).json(req.body);
    })
.put(function (req, res) {

    })
.delete(function (req, res) {

    });

router.delete('/:id', function (req, res) {
    // write code to remove element from the array
    for (var i = 0, len = contacts.length; i < len; i++) {
        if (contacts[i]._id === req.params.id) {
            contacts.splice(i, 1);
            res.status(200).json({ message: 'deleted resource' });
            return;
        }
    }
    res.status(400).json({ message: 'The specified resource does not exist!' });
});

router.get('/nonangular', function (req, res) {
    res.render('nonangular');
});




module.exports = router;