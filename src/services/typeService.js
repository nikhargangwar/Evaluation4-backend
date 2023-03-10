const db = require('../models');

const getAllTypesFromDb= async()=>{
    const data = await db.Type.findAll();
    return data;
};

const postTypeToDb = async(name)=>{
    const result = await db.Type.create({
        name
    });
    return result;
};

const deleteTypeFromDb = async(id)=>{

    const deletedType = await db.Type.destroy({where:{id}});

    return deletedType;
   
};

const patchTypeByIdFromDb =async(name, id)=>{
    const updatedType = await db.Type.update({ name }, {
        where: {
            id: id
        }
    });
    return updatedType;
};
module.exports = {
    getAllTypesFromDb,
    postTypeToDb,
    deleteTypeFromDb,
    patchTypeByIdFromDb
};