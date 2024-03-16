import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge three sorted arrays', () => {
        const arr1 = [1, 3, 5];
        const arr2 = [2, 4, 6];
        const arr3 = [6, 4, 2];
        const expected = [6, 6, 5, 4, 4, 3, 2, 2, 1];
        const result = merge(arr1, arr2, arr3);
        expect(result).toEqual(expected);
    });
});
