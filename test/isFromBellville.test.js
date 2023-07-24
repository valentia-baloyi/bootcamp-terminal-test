import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('testing my isFromBellville function',  function(){

    it('it should return true if registration number starts with CY' , function(){

        assert.equal(true, isFromBellville('CY 123'));

 

    });

    it('it should return false if registration number does not start with CY' , function(){

        assert.equal(false, isFromBellville ('CJ 123'));

 

    });

});
