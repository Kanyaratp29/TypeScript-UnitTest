import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge three sorted arrays', () => {
        const arr1 = [1, 5, 8];
        const arr2 = [3, 6, 7];
        const arr3 = [9, 2, 4];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = merge(arr1, arr2, arr3);
        
        expect(result).toEqual(expected);
    });
});
