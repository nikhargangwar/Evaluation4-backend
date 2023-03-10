
const typeService = require('../services/typeService');

const getAllTypes = async (req, res) => {
    try {
        const data = await typeService.getAllTypesFromDb()
        res.status(200).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

const createType = async (req, res) => {
    try {
        const {name} = req.body
        const data = await typeService.postTypeToDb(name)
        res.status(201).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteType = async (req, res) => {
    try {
        const {id} = req.body
        const data = await typeService.deleteTypeFromDb(id)
        res.status(200).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const updateType = async (req, res) => {
    try {
        const {name, id} = req.body
        const data = await typeService.patchTypeByIdFromDb(name, id)
        res.status(200).json({data})
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAllTypes,
    createType,
    deleteType,
    updateType
}
