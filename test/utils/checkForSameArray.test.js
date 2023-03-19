const checkForSameArray = require('../../src/utils/checkForSameArray');

describe('checkForSameArray', () => {
    it('should return true if the arrays are the same', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];

        const result = checkForSameArray(arr1, arr2);

        expect(result).toBe(true);
    });

    it('should return false if the arrays are not the same', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 4];

        const result = checkForSameArray(arr1, arr2);

        expect(result).toBe(false);
    });
})
