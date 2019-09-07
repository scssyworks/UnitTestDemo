export function subtract(a, b) {
    if (arguments.length === 2) {
        return a - b;
    } else {
        throw new Error('Missing parameter');
    }
}