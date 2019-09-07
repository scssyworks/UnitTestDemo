import { add } from '../src/add';

describe('Add', () => {
    it('should add two numbers', () => {
        expect(add(20, 30)).to.equals(50);
    });
    it('should add two negative numbers', () => {
        expect(add(-20, -30)).to.equals(-50);
    });
    it('should subtract two numbers if either one number is negative', () => {
        expect(add(20, -30)).to.equals(-10);
        expect(add(-20, 30)).to.equals(10);
    });
    it('should throw an error if either one of the parameters is missing', () => {
        expect(add.bind(null, 20)).to.throw('Missing parameter');
    });
});