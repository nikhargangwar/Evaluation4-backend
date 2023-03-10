const express = require('express');

const entryRouter = require('./entryRoutes')
const fieldRouter = require('./fieldRoutes');
const typeRouter = require('./typeRoutes');

const router = express.Router();

router.use('/type',typeRouter);
router.use('/entry',entryRouter);
router.use('/field',fieldRouter);

module.exports = router;