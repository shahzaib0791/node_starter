const router = require('express').Router();

/**
 * web routes
 */

router.get('/', (req, res, next) => {
   res.render('index');
});
 

module.exports = router;