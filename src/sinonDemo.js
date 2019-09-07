import $ from 'jquery';
import axios from 'axios';

export function printHelloWorld() {
    const app = $('#app');
    return axios.get('http://demo2146547.mockable.io/api').then(resp => {
        if (resp.data.status === 'success') {
            app.html(resp.data.msg);
        } else {
            throw new Error('Some error occurred');
        }
    });
}