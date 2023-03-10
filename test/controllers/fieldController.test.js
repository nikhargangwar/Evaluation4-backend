/* eslint-disable no-undef */
const fieldController = require('../../src/controllers/entryController');
const fieldService = require('../../src/services/entryService');

describe('fieldController', () => {
    describe('getEntryByType', () => {
        it('should call fieldService.getEntryByTypeFromDb with the correct params', async () => {
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
            await fieldController.getEntryByType(req, res, next);

            expect(fieldService.getEntryByTypeFromDb).toHaveBeenCalledWith('typeId');
        });

        
    });
});