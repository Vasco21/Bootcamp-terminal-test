let assert = require('assert');
let countRegNumber = require('../function-to-test/countRegNumber')

describe('The countRegNumber function', function(){

    it('should return the total of the regNo on the list.', function(){
        assert.equal(1, countRegNumber("CA 182736"));
    });
    it('should return the total of the regNo on the list.', function(){
        
        assert.equal(3, countRegNumber("CA 182736 ,CY 523519, CJ 812328"));
    });
});
    