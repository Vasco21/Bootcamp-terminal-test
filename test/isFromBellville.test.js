let assert = require("assert");
let isFromBellville = require("../function-to-test/isFromBellville");

describe('The isFromBellville function', function(){

    it('should retuen true if there cars with the registration number from Bellville.', function(){
        assert.equal(true, isFromBellville('CY'));
    });

    it('should return false if there is no cars with registration number from Bellville.', function(){
        assert.equal(false, isFromBellville('CA'));
    });
});