const express = require('express');

// const { validateReq } = require('../middlewares/authMiddlewares')
const {getFieldByType, createField, deleteField, updateField} = require('../controllers/fieldController')
const { getFieldByTypeSchema, createFieldSchema, deleteFieldSchema, updateFieldSchema } = require('../middlewares/fieldValidators');

const validator = require('express-joi-validation').createValidator({})
const fieldRouter = express.Router();

fieldRouter.get('/', validator.body(getFieldByTypeSchema), getFieldByType);
fieldRouter.post('/', validator.body(createFieldSchema), createField);
fieldRouter.delete('/', validator.body(deleteFieldSchema), deleteField);
fieldRouter.patch('/', validator.body(updateFieldSchema), updateField);

module.exports = fieldRouter;