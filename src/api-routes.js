// Initialize express router
let router = require('express').Router();
let db = require('./db');

// get resource data
router.get('/:id', function(req, res) {
  console.log('request to', req.path);
  console.log('origin', req.get('origin'));

  res.json({
    status: 'GET completed',
    payload: {
      [req.params.id]: db.get(req.params.id),
    },
  });
});

// increase counter
router.post('/:id', function(req, res) {
  console.log('origin', req.get('origin'));
  // TODO: sanitize params
  let data = db.increase(req.params.id, req.body.emoji);
  res.json({
    status: 'POST completed',
    payload: {
      [req.params.id]: data,
    },
  });
});

module.exports = router;
