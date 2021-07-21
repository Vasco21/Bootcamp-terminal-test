let assert = require("assert");
let fromWhere = require("../function-to-test/fromWhere")

describe('The fromWhere function', function(){
    
    it('should return regNO if the car is from Bellville', function(){
        assert.equal("Bellville", fromWhere("CY"));
    });

    it('should return regNO if the car is from Paarl', function(){
        assert.equal("Paarl", fromWhere("CJ"));
    });
    it('should return regNO if the car is from Cape town', function(){
        assert.equal("Cape Town", fromWhere("CA"));
    });
    it('should return regNO if the car is from some other places', function(){
        assert.equal("Some other place!", fromWhere("CC"));
    });
});