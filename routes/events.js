var express = require('express');
var router = express.Router();

/* GET facilities page. */
router.get('/', function(req, res) {
  res.render('events', {
    title: 'Events',
    page: 'eventList'
  });
});
module.exports = router;
