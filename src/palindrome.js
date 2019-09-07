export function palindrome(str) {
    if (['string', 'number'].includes(typeof str)) {
        const testStr = `${str}`;
        return testStr === testStr.split('').reverse().join('');
    }
    return false;
}