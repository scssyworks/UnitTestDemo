import $ from 'jquery';
import { domManipulation, bindEvents } from '../src/domManipulation';

describe('DOM Manipulation', () => {
    before(() => {
        bindEvents();
    });
    it('should insert an empty div with class ".empty-div" to DOM', () => {
        domManipulation();
        expect($('.empty-div').length).to.equals(1);
    });
    it('should not insert empty div if ".empty-div" already exists', () => {
        domManipulation();
        expect($('.empty-div').length).to.not.equals(2);
    });
    it('should remove empty div on when the div is clicked', () => {
        $('.empty-div').trigger('click');
        expect($('.empty-div').length).to.equals(0);
    });
});