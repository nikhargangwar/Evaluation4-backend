const express = require('express');

// const { validateReq } = require('../middlewares/authMiddlewares')
const {getAllTypes, createType, deleteType, updateType} = require('../controllers/typeController')
const { getAllTypesSchema, createTypeSchema, deleteTypeSchema, updateTypeSchema } = require('../middlewares/typeValidators');

const validator = require('express-joi-validation').createValidator({})

const typeRouter = express.Router();

typeRouter.get('/', validator.body(getAllTypesSchema), getAllTypes);
typeRouter.post('/', validator.body(createTypeSchema), createType);
typeRouter.delete('/', validator.body(deleteTypeSchema), deleteType);
typeRouter.patch('/', validator.body(updateTypeSchema), updateType);

module.exports = typeRouter;