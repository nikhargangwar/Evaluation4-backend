const Joi = require('joi');

const getEntryByTypeSchema = Joi.object({
    typeId: Joi.number().integer().required()
});

const createEntrySchema = Joi.object({
    typeId: Joi.number().integer().required(),
    data: Joi.object()
});

const deleteEntrySchema = Joi.object({
    id: Joi.number().integer().required()
});

const updateEntrySchema = Joi.object({
    id: Joi.number().integer().required(),
    data: Joi.object()
});

module.exports = {
    getEntryByTypeSchema,
    createEntrySchema,
    deleteEntrySchema,
    updateEntrySchema
}