const fieldServices = require('../../src/services/fieldService');
const db = require('../../src/models');


describe ('Field Services', () => {
    it('should return all fields',async()=>{
        jest.spyOn(db.Field, 'findAll').mockResolvedValue([{
            id: 1,
            fieldName: 'name',
            fieldType: 'text',
            typeId: 1
        },
        {
            id: 2,
            fieldName: 'description',
            fieldType: 'text',
            typeId: 1
        },
        {
            id: 3,
            fieldName: 'status',
            fieldType: 'text',
            typeId: 1
        }]);
        const fields = await fieldServices.getFieldByTypeFromDb(1);
        expect(fields).toHaveLength(3);
    }),
    it('should return a field',async()=>{
        jest.spyOn(db.Field, 'findByPk').mockResolvedValue({
            id: 1,
            fieldName: 'name',
            fieldType: 'text',
            typeId: 1
        });
        const field = await fieldServices.getFieldByIdFromDb(1);
        expect(field).toHaveProperty('id');
    }),
    it('should post a field',async()=>{
        jest.spyOn(db.Field, 'create').mockResolvedValue({
            id: 1,
            fieldName: 'name',
            fieldType: 'text',
            typeId: 1
        });
        const field = await fieldServices.postFieldToDb('name', 'text', 1);
        expect(field).toHaveProperty('id');
    }),
    it('should delete a field',async()=>{
        jest.spyOn(db.Field, 'destroy').mockResolvedValue(1);
        const deleted = await fieldServices.deleteFieldFromDb(1);
        expect(deleted).toBe(1);
    }),
    it('should patch a field',async()=>{
        jest.spyOn(db.Field, 'update').mockResolvedValue([1]);
        const patched = await fieldServices.patchFieldByIdFromDb('name', 'text', 1);
        expect(patched).toEqual([1]);
    })
})