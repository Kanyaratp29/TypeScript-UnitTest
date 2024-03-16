# Merge Sort

This project implements a function to merge three sorted arrays without using any sorting function.

## Installation

1. Clone the repository:


2. Install dependencies:

npm install


## Usage

To use the merge function, import it into your TypeScript project:

```typescript
import { merge } from './src/merge';

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const arr3 = [6, 4, 2];

const result = merge(arr1, arr2, arr3);
console.log(result); // Output: [6, 6, 5, 4, 4, 3, 2, 2, 1]

## Running test

npm test

