# TypeScript Basic Learning

A beginner-friendly guide to learning TypeScript fundamentals, covering type annotations, basic syntax, and essential concepts.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Type Annotations](#type-annotations)
- [Functions with Types](#functions-with-types)
- [Examples](#examples)
- [Next Steps](#next-steps)

## Installation

### Installing TypeScript Globally
```bash
npm install --global typescript
```

### Verify Installation
```bash
tsc --version
```

## Configuration

### Create TypeScript Config File
```bash
tsc --init
```

The `tsconfig.json` file serves as a roadmap for the TypeScript compiler. It contains all the rules and settings that control how your TypeScript code is compiled, including:
- Compilation options
- File inclusion/exclusion patterns
- Module resolution settings
- Output directory configuration

## Type Annotations

TypeScript allows you to explicitly declare variable types, providing better code documentation and error prevention.

### Basic Type Declarations

```typescript
// Primitive types
let numberVar: number = 15;
let stringVar: string = "Hello World";
let booleanVar: boolean = true;

// Any type (use sparingly)
let anyVar: any = "flexible type";

// Array types
let mixedArray: any[] = ['text', 45, true];
let stringArray: string[] = ["one", "two", "three"];
```

### Key Type Annotations:
- `number` - For numeric values
- `string` - For text data
- `boolean` - For true/false values
- `any` - Allows any type (reduces type safety)
- `type[]` - Arrays of specific types

## Functions with Types

TypeScript enables you to specify parameter types and return types for functions:

```typescript
// Function with typed parameters and return type
const concatenateValues = (a: string, b: string): string => {
    return a + b;
}

console.log(concatenateValues("Hi ", "Everyone!")); // Output: "Hi Everyone!"
```

### Function Type Syntax:
- `(parameter: type)` - Parameter with type annotation
- `: returnType` - Specifies the function's return type
- Arrow functions and regular functions both support type annotations

## Examples

The examples in this repository demonstrate:
1. **Variable Type Declarations** - How to declare variables with specific types
2. **Array Typing** - Working with typed arrays (homogeneous and mixed)
3. **Function Signatures** - Creating functions with typed parameters and return values
4. **Type Safety** - How TypeScript prevents common programming errors

## Running the Code

1. Compile TypeScript to JavaScript:
```bash
tsc filename.ts
```

2. Run the compiled JavaScript:
```bash
node filename.js
```

Or use `ts-node` for direct execution:
```bash
npx ts-node filename.ts
```

## Next Steps

As you continue learning TypeScript, explore these advanced topics:
- Interfaces and custom types
- Generics
- Union and intersection types
- Classes and inheritance
- Modules and namespaces
- Advanced compiler options

## Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Online editor for testing


