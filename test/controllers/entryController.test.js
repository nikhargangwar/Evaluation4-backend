/* eslint-disable no-undef */
const entryController = require('../../src/controllers/entryController');
const entryService = require('../../src/services/entryService');


describe('entryController', () => {
    describe('getEntryByType', () => {
        it('should call entryService.getEntryByTypeFromDb with the correct params', async () => {
            const req = {
                body: {
                    typeId: 'typeId'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            await entryController.getEntryByType(req, res, next);

            expect(entryService.getEntryByTypeFromDb).toHaveBeenCalledWith('typeId');
        });

        
        
    });
});
