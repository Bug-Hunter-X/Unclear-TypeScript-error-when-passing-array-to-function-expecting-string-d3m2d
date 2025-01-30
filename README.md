# Unclear TypeScript Error: Array to String Function

This repository demonstrates a TypeScript error that arises when an array is passed to a function expecting a string. The error message could be more descriptive, making it harder for developers to understand the issue.

## Bug Description

The `greeter` function expects a string argument. Passing an array to this function results in a TypeScript error. The error message itself is not very informative about the root cause. 

## Bug Reproduction

1. Clone this repository.
2. Open `bug.ts`.
3. Attempt to compile the code using a TypeScript compiler (e.g., `tsc bug.ts`).
4. Observe the error message.

## Solution

The solution involves either modifying the `greeter` function to handle arrays or changing the function call to pass a single string argument. The `bugSolution.ts` file shows how to modify the function and the call to fix the issue.