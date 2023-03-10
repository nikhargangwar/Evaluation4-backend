const express = require('express');

// const { validateReq } = require('../middlewares/authMiddlewares')
const {getEntryByType, createEntry, deleteEntry, updateEntry} = require('../controllers/entryController');
const { getEntryByTypeSchema, createEntrySchema, deleteEntrySchema, updateEntrySchema } = require('../middlewares/entryValidators');

const validator = require('express-joi-validation').createValidator({})

const entryRouter = express.Router();

entryRouter.post('/', validator.body(getEntryByTypeSchema), getEntryByType);
entryRouter.post('/create', validator.body(createEntrySchema), createEntry);
entryRouter.delete('/', validator.body(deleteEntrySchema), deleteEntry);
entryRouter.patch('/', validator.body(updateEntrySchema), updateEntry);

module.exports = entryRouter;