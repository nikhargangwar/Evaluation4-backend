const Joi = require('joi');

const getAllTypesSchema = Joi.object({});

const createTypeSchema = Joi.object({
    name: Joi.string().min(3).max(20).required()
});

const deleteTypeSchema = Joi.object({
    id: Joi.number().integer().required()
});

const updateTypeSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().min(3).max(20).required()
});

module.exports = {
    getAllTypesSchema,
    createTypeSchema,
    deleteTypeSchema,
    updateTypeSchema
}