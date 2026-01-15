function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input === null || input === undefined) {
        return '';
    }

    // Trim whitespace and replace special characters
    const trimmedInput = input.trim();
    const kebabCase = trimmedInput
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/[^a-zA-Z0-9-]/g, '') // Remove special characters
        .toLowerCase(); // Convert to lowercase

    return kebabCase;
}

// Example usage
console.log(toKebabCase("Big Button")); // Output: "big-button"
console.log(toKebabCase("bigButton")); // Output: "big-button"
console.log(toKebabCase(5)); // Throws error
console.log(toKebabCase("")); // Output: ""