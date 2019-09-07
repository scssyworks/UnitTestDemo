import { subtract } from '../src/subtract';

describe('Substract', () => {
    it('should subtract two numbers', () => {
        expect(subtract(20, 30)).to.equals(-10);
    });
    it('should subtract two negative numbers', () => {
        expect(subtract(-20, -30)).to.equals(10);
    });
    it('should subtract two numbers if either one number is negative', () => {
        expect(subtract(20, -30)).to.equals(50);
        expect(subtract(-20, 30)).to.equals(-50);
    });
    it('should throw an error if either one of the parameters is missing', () => {
        expect(subtract.bind(null, 20)).to.throw('Missing parameter');
    });
});