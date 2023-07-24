import assert from "assert";
import greet from "../greet.js";

describe('testing my greet function',  function(){

   it('it should return hello, Bob when it is called with Bob' , function(){

       assert.equal('Hello, Bob', greet('Bob'), 'this must be true');



   });

   it('it should return Hello, Sam when it is called with Sam' , function(){

       assert.equal('Hello, Sam', greet('Sam'), 'this must be true');



   });

});

