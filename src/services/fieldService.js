const db = require('../models');

const getFieldByTypeFromDb= async(typeId)=>{
    const data = await db.Field.findAll({
        where:{typeId}
        
    });
    return data;
};

const getFieldByIdFromDb = async(id) => {
    const data = await db.Field.findByPk(id)
    return data
}

const postFieldToDb = async(fieldName, fieldType, typeId)=>{
    const result = await db.Field.create({
        fieldName,
        fieldType,
        typeId
    });
    return result;
};

const deleteFieldFromDb = async(id)=>{

    const deletedField = await db.Field.destroy({where:{id}});

    return deletedField;
   
};

const patchFieldByIdFromDb =async(fieldName, fieldType, id)=>{
    const updatedField = await db.Field.update({ fieldName, fieldType }, {
        where: {
            id: id
        }
    });
    return updatedField;
};
module.exports = {
    getFieldByIdFromDb,
    getFieldByTypeFromDb,
    postFieldToDb,
    deleteFieldFromDb,
    patchFieldByIdFromDb
};