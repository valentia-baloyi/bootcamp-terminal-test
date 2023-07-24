import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('testing my countRegNumber function',  function(){

    it('it should return the number of registration numbers in the string CA 182736,CY 523519,CJ 812328', function(){

        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

 

    });

});