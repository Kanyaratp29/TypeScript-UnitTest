export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0, k = 0;

    while (i < collection1.length || j < collection2.length || k < collection3.length) {
        let minVal = Number.MAX_SAFE_INTEGER;

        if (i < collection1.length && collection1[i] < minVal) {
            minVal = collection1[i];
        }
        if (j < collection2.length && collection2[j] < minVal) {
            minVal = collection2[j];
        }
        if (k < collection3.length && collection3[k] < minVal) {
            minVal = collection3[k];
        }

        result.push(minVal);

        if (i < collection1.length && collection1[i] === minVal) {
            i++;
        }
        if (j < collection2.length && collection2[j] === minVal) {
            j++;
        }
        if (k < collection3.length && collection3[k] === minVal) {
            k++;
        }
    }

    return result;
}
