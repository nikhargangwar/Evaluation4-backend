/* eslint-disable no-undef */
const entryServices = require('../../src/services/entryService');
const db = require('../../src/models');


describe ('Entry Services', () => {
    it('should return all tasks',async()=>{
        jest.spyOn(db.Entry, 'findAll').mockResolvedValue([{
            id: 1,
            data: {
                name: 'Task 1',
                description: 'Description 1'
            },
            typeId: 1
        },
        {
            id: 2,
            data: {
                name: 'Task 2',
                description: 'Description 2'
            },
            typeId: 1
        },
        {
            id: 3,
            data: {
                name: 'Task 3',
                description: 'Description 3'
            },
            typeId: 1
        }]);
        const tasks = await entryServices.getEntryByTypeFromDb(1);
        expect(tasks).toHaveLength(3);
    }),
    it('should post a entry',async()=>{
        jest.spyOn(db.Entry, 'create').mockResolvedValue({
            id: 1,
            data: {
                name: 'Task 1',
                description: 'Description 1'
            },
            typeId: 1
        });
        const task = await entryServices.postEntryToDb({
            name: 'Task 1',
            description: 'Description 1'
        }, 1);
        expect(task).toHaveProperty('id');
    }),
    it('should delete a entry',async()=>{
        jest.spyOn(db.Entry, 'destroy').mockResolvedValue(1);
        const deleted = await entryServices.deleteEntryFromDb(1);
        expect(deleted).toBe(1);
    }),
    
    it('should delete a field',async()=>{
        jest.spyOn(entryServices, 'getEntryByTypeFromDb').mockResolvedValue([{
            id: 1,
            data: {
                name: 'Task 1',
                description: 'Description 1'
            },
            typeId: 1
        },
        {
            id: 2,
            data: {
                name: 'Task 2',
                description: 'Description 2'
            },
            typeId: 1
        },
        {
            id: 3,
            data: {
                name: 'Task 3',
                description: 'Description 3'
            },
            typeId: 1
        }]);

        jest.spyOn(db.Entry, 'destroy').mockResolvedValue(1);
        jest.spyOn(db.Entry, 'update').mockResolvedValue([1]);
        const deleted = await entryServices.deleteField('name', 1);
        expect(deleted).toBe(undefined);
    }),


    it('should patch a entry',async()=>{
        jest.spyOn(db.Entry, 'update').mockResolvedValue([1]);
        const patched = await entryServices.patchEntryByIdFromDb({
            name: 'Task 1',
            description: 'Description 1'
        }, 1);
        expect(patched).toEqual([1]);
    })

})
