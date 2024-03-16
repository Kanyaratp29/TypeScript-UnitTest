export function Sort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {

                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
}

export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const mergedArray: number[] = [...collection1, ...collection2, ...collection3];
    Sort(mergedArray);
    
    return mergedArray;
}
