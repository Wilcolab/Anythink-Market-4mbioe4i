/**
 * Converts a string to camelCase format.
 * 
 * Transforms the input string by converting the first character to lowercase
 * while keeping the rest of the string unchanged. This is useful for converting
 * PascalCase strings to camelCase.
 * 
 * @param {string} input - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null
 * @throws {Error} If input is undefined
 * @throws {Error} If input is not a string type
 * 
 * @example
 * toCamelCase("BigButton"); // Returns "bigButton"
 * toCamelCase("hello");     // Returns "hello"
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms the input string by inserting dots before uppercase letters
 * and converting the entire result to lowercase. This is useful for converting
 * camelCase or PascalCase strings to dot.case notation.
 * 
 * @param {string} input - The input string to convert to dot.case
 * @returns {string} The converted dot.case string with all characters in lowercase
 * @throws {Error} If input is null
 * @throws {Error} If input is undefined
 * @throws {Error} If input is not a string type
 * 
 * @example
 * toDotCase("BigButton");   // Returns "big.button"
 * toDotCase("helloWorld");  // Returns "hello.world"
 */
function toCamelCase(input) {
    // Error handling for non-string inputs
    if (input === null) {
        throw new Error("Input cannot be null");
    }

    if (input === undefined) {
        throw new Error("Input cannot be undefined");
    }

    if (typeof input !== "string") {
        throw new Error(`Invalid input type: expected string, received ${typeof input}`);
    }

    if (input.length === 0) {
        return input;
    }

    // Convert to camelCase: first character lowercase, rest as-is
    return input.charAt(0).toLowerCase() + input.slice(1);
}

// Example usage:
console.log(toCamelCase("BigButton")); // "bigButton"
console.log(toCamelCase("hello")); // "hello"

// Error cases:
try {
    toCamelCase(5);
} catch (error) {
    console.error(error.message); // "Invalid input type: expected string, received number"
}

try {
    toCamelCase(null);
} catch (error) {
    console.error(error.message); // "Input cannot be null"
}

try {
    toCamelCase(undefined);
} catch (error) {
    console.error(error.message); // "Input cannot be undefined"
}
function toDotCase(input) {
    // Error handling for non-string inputs
    if (input === null) {
        throw new Error("Input cannot be null");
    }

    if (input === undefined) {
        throw new Error("Input cannot be undefined");
    }

    if (typeof input !== "string") {
        throw new Error(`Invalid input type: expected string, received ${typeof input}`);
    }

    if (input.length === 0) {
        return input;
    }

    // Convert to dot.case: insert dots before uppercase letters and convert to lowercase
    return input.replace(/([a-z])([A-Z])/g, "$1.$2").toLowerCase();
}

// Example usage:
console.log(toDotCase("BigButton")); // "big.button"
console.log(toDotCase("helloWorld")); // "hello.world"

// Error cases:
try {
    toDotCase(5);
} catch (error) {
    console.error(error.message); // "Invalid input type: expected string, received number"
}

try {
    toDotCase(null);
} catch (error) {
    console.error(error.message); // "Input cannot be null"
}
 