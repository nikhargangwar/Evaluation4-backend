const typeController = require('../../src/controllers/entryController');
const typeService = require('../../src/services/entryService');


describe('typeController', () => {

    describe('getEntryByType', () => {
        it('should call typeService.getEntryByTypeFromDb with the correct params', async () => {
            const req = {
                body: {
                    typeId: 'typeId'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            await typeController.getEntryByType(req, res, next);

            expect(typeService.getEntryByTypeFromDb).toHaveBeenCalledWith('typeId');
        });
    });
}
)
