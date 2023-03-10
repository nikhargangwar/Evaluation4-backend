
const fieldService = require('../services/fieldService');
const entryService = require('../services/entryService');

const getFieldByType = async (req, res) => {
    try {
        const {typeId} = req.body
        const data = await fieldService.getFieldByTypeFromDb(typeId)
        res.status(200).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

const createField = async (req, res) => {
    try {
        const {fieldName, fieldType, typeId} = req.body
        const data = await fieldService.postFieldToDb(fieldName, fieldType, typeId)
        res.status(201).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteField = async (req, res) => {
    try {
        const {id} = req.body

        const fieldData = await fieldService.getFieldByIdFromDb(id);
        if(fieldData) {

            //delete field from entry
            console.log(fieldData.fieldName, fieldData.typeId)
            await entryService.deleteField(fieldData.fieldName, fieldData.typeId)

            const data = await fieldService.deleteFieldFromDb(id)

            res.status(200)
                .json({data})

        } 

        res.status(200)

        
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const updateField = async (req, res) => {
    try {
        const {fieldName, fieldType, id} = req.body
        const data = await fieldService.patchFieldByIdFromDb(fieldName, fieldType, id)
        res.status(200).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getFieldByType,
    createField,
    deleteField,
    updateField
}
