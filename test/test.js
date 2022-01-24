const expect = require('chai').expect;
const request = require('request');

describe('<example_describe>', function() {
    it('<example_test>',function (done){
        request('http://localhost:3000', function (error, response, body) {
            expect(body).to.equal('Hello Shraddha');
            done();
        });
    });
});
