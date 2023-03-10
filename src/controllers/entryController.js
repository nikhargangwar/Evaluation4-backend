
const entryService = require('../services/entryService');
const fieldService = require('../services/fieldService');
const checkForSameArray = require('../utils/checkForSameArray');

const getEntryByType = async (req, res) => {
    try {
        const {typeId} = req.body
        const data = await entryService.getEntryByTypeFromDb(typeId)
        res.status(200).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

const createEntry = async (req, res) => {
    try {
        const {data, typeId} = req.body

        //check if data corresponds to fields
        const fieldsInData = Object.keys(data);
        const fieldsResponse = await fieldService.getFieldByTypeFromDb(typeId);
        const fields = fieldsResponse.map(doc => doc.fieldName)
        if(!checkForSameArray(fieldsInData,fields)) return res.status(400).json({data: "Invalid Fields"})

        const creationData = await entryService.postEntryToDb(data, typeId)
        res.status(201).json({data: creationData})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteEntry = async (req, res) => {
    try {
        const {id} = req.body
        const data = await entryService.deleteEntryFromDb(id)
        res.status(200).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const updateEntry = async (req, res) => {
    try {
        const {data, id} = req.body
        const updateData = await entryService.patchEntryByIdFromDb(data, id)
        res.status(200).json({data: updateData})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getEntryByType,
    createEntry,
    deleteEntry,
    updateEntry
}
