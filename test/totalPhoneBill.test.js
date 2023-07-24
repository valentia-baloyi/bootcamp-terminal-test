import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('testing my totalPhoneBill function', function(){
    
    it('Calculate the total bill for the data provided, and returns the total' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
        
});

});