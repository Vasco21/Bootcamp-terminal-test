let assert = require("assert")
let regCheck = require("../function-to-test/regCheck")

describe('The regCheck function', function(){

    it('Should return true if the regNoo for GP is registration plates.', function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it('Should return false if the regNo for EC is wrong on the registration plates. ', function(){
        // this test will fail - can you fix it?
        
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
});
