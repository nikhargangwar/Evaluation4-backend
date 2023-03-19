/* eslint-disable no-undef */
const entryController = require('../../src/controllers/entryController');
const entryService = require('../../src/services/entryService');


describe('entryController', () => {
    describe('getEntryByType', () => {
        it('should call entryService.getEntryByTypeFromDb with the correct params', async () => {
            jest.spyOn(entryService, 'getEntryByTypeFromDb').mockResolvedValue(
                {
                    data: 'data'
                }
            );
            
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

            expect(res.status).toHaveBeenCalledWith(200);

        });

        it('should call next with the error if entryService.getEntryByTypeFromDb throws an error', async () => {
            jest.spyOn(entryService, 'getEntryByTypeFromDb').mockRejectedValue(
                new Error('error')
            );
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
            await entryController.getEntryByType(req, res, next);

            expect(res.status).toHaveBeenCalledWith(500);
        }
        );
        
        // it('should call createEntry with the correct params', async () => {
        //     jest.replaceProperty(entryService, 'getFieldByTypeFromDb', jest.fn());
        //     jest.spyOn(entryService, 'postEntryToDb').mockResolvedValue(
        //         {                  
        //             data: 'data',
        //             typeId: 'typeId'
        //         }
        //     );

        //     const req = {
        //         body: {
        //             typeId: 'typeId'
        //         }
        //     };
        //     const res = {
        //         status: jest.fn().mockReturnThis(),
        //         json: jest.fn()
        //     };

        //     await entryController.createEntry(req, res);
        //     expect(res.status).toHaveBeenCalledWith(500);
        // });

        it('should call fieldService.deleteEntryFromDb with the correct params', async () => {
            jest.spyOn(entryService, 'deleteEntryFromDb').mockResolvedValue(
                {
                    data: 'data'
                }
            );
            const req = {
                body: {
                    id: 'id'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await entryController.deleteEntry(req, res);
            expect(res.status).toHaveBeenCalledWith(200);




    });

    it('should call next with the error if entryService.deleteEntryFromDb throws an error', async () => {
        jest.spyOn(entryService, 'deleteEntryFromDb').mockRejectedValue(
            new Error('error')
        );
        const req = {
            body: {
                id: 'id'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        const next = jest.fn();
        await entryController.deleteEntry(req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);
    }
    );
    it('should call updateEntry with the correct params', async () => {
        jest.spyOn(entryService, 'patchEntryByIdFromDb').mockResolvedValue(
            {
                data: 'data'
            }
        );
        const req = {
            body: {
                data: 'data',
                id: 'id'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await entryController.updateEntry(req, res);
        expect(res.status).toHaveBeenCalledWith(200);

});
it('should call next with the error if entryService.patchEntryByIdFromDb throws an error', async () => {
    jest.spyOn(entryService, 'patchEntryByIdFromDb').mockRejectedValue(
        new Error('error')
    );
    const req = {
        body: {
            data: 'data',
            id: 'id'

        }
    };
    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    };
    const next = jest.fn();
    await entryController.updateEntry(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    });
});
});



