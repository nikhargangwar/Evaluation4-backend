const Joi = require('joi');

const getFieldByTypeSchema = Joi.object({
    typeId: Joi.number().integer().required()
});

const createFieldSchema = Joi.object({
    typeId: Joi.number().integer().required(),
    fieldName: Joi.string().min(2).max(20).required(),
    fieldType: Joi.string().valid('text','number','email')
});

const deleteFieldSchema = Joi.object({
    id: Joi.number().integer().required()
});

const updateFieldSchema = Joi.object({
    id: Joi.number().integer().required(),
    fieldName: Joi.string().min(2).max(20).required(),
    fieldType: Joi.string().valid('text','number','email')
});

module.exports = {
    getFieldByTypeSchema,
    createFieldSchema,
    deleteFieldSchema,
    updateFieldSchema
}