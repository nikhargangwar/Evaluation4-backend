const db = require('../models');

const getEntryByTypeFromDb= async(typeId)=>{
    const data = await db.Entry.findAll({
        typeId
    });
    return data;
};

const postEntryToDb = async(data, typeId)=>{
    const result = await db.Entry.create({
        data,
        typeId
    });
    return result;
};

const deleteEntryFromDb = async(id)=>{

    const deletedEntry = await db.Entry.destroy({where:{id:id}});

    return deletedEntry;
   
};

const deleteField = async(fieldName, typeId) => {

    const entries = await getEntryByTypeFromDb(typeId)

    await Promise.all(entries.map(async entry => {
        const data = entry.data;
        delete data[fieldName]
        if(Object.keys(data).length===0) {
            await db.Entry.destroy({where:{id:entry.id}})
        } else {
            await db.Entry.update({ data }, {
                where: {
                    id: entry.id
                }
            });
        }
        
    }));

}

const patchEntryByIdFromDb =async(data, id)=>{
    const updatedEntry = await db.Entry.update({ data }, {
        where: {
            id: id
        }
    });
    return updatedEntry;
};
module.exports = {
    getEntryByTypeFromDb,
    postEntryToDb,
    deleteEntryFromDb,
    patchEntryByIdFromDb,
    deleteField
};