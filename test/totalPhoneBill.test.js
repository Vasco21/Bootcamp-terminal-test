let assert = require("assert");
let totalPhoneBill = require("../function-to-test/totalPhoneBill")

describe('The totalPhoneBill function', function(){
    
    it('should print totla of the sms', function(){
        assert.equal("R0.65", totalPhoneBill('sms', 'sms', 'sms'));
    });

    it('should print the total of the call', function(){
        assert.equal("R2.75", totalPhoneBill('call', 'call'));
    });

    it('should print the total cos of all usage', function(){
        assert.equal("R7.45", totalPhoneBill('sms, sms, sms, call, call'));
    });
});