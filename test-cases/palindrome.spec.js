import { palindrome } from '../src/palindrome';

describe('Palindrome', () => {
    it('should return true of the reverse of a string is same as current string', () => {
        expect(palindrome('malayalam')).to.be.true;
    });
    it('should return false of the reverse of a string is not same as current string', () => {
        expect(palindrome('hello')).to.be.false;
    });
    it('should be case sensitive', () => {
        expect(palindrome('Malayam')).to.be.false;
    });
    it('should test numbers for palindrome', () => {
        expect(palindrome(10001)).to.be.true;
    });
    it('should return false if the type of argument is not string or number', () => {
        expect(palindrome()).to.be.false;
    });
});