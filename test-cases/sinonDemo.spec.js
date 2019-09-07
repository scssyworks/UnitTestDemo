import $ from 'jquery';
import axios from 'axios';
import { printHelloWorld } from '../src/sinonDemo';

describe('Sinon demo', () => {
    before(() => {
        $(document.body).empty().append('<div id="app"></div>');
        sinon.stub(axios, 'get').onCall(0).returns(new Promise(res => res({
            data: {
                status: 'success',
                msg: 'Hello World'
            }
        })));
    });
    after(() => {
        $(document.body).empty();
        axios.get.restore();
    });
    it('Should print hello world on page', (done) => {
        printHelloWorld().then(() => {
            expect($('#app').text()).to.equals('Hello World');
            done();
        });
    });
});