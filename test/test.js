const expect = require('chai').expect;
require('../app/app');
const axios = require('axios');


describe('GET /', function() {
    it('responds with a welcome message',async function (){
        const response = await axios.get('http://localhost:3000');
        expect(response.status).to.eql(200);
        expect(response.data).to.equal('Hello Shraddha');
    });
});
