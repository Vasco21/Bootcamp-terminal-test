let assert = require("assert");
let greet = require("../function-to-test/greet");

describe('The greet function', function(){

    it('should greet Vasco correctly', function(){
        assert.equal('Hello, Vasco', greet('Vasco'));
    });
    it('should greet Eddie correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Eddie', greet('Eddie'));
    });
});