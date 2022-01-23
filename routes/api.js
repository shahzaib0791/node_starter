const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Test Api works fine!'
    });
});


module.exports = router;