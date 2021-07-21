let assert = require("assert");
let yearsAgo = require("../function-to-test/yearsAgo");

describe('The yearsAgo function', function(){

    it('should return 21 which is the diffYears between the current year 2000.', function(){
        assert.equal(21, yearsAgo(2000));
    });

    it('should return 45 which is the diffYears between the current year 1976.', function(){
        assert.equal(45, yearsAgo(1976));
    });
});