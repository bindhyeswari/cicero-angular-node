var router = require('express').Router();

var friends = [{ name: 'Christina', location: 'Sunnyvale' }, { name: 'Wei', location: 'Sunnyvale' }];

router.get('/', function (req, res) {
    res.render('jahara');
});

router.get('/friends', function (req, res) {
    res.json(friends);
});

module.exports = router;