import assert from "assert";
import regCheck from "../regCheck.js";

describe('testing my regCheck function',  function(){

    it('it should return true if registration number starts with GP' , function(){

        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

 

    });

    it('it should return false if registration number does not start with GP' , function(){

        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

 

    });

});
