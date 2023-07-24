function fromWhere(regNu){
    if (regNu.startsWith("CY")){
    return "Bellville"
    }
      else if (regNu.startsWith("CJ 343502")){
      return "Paarl"
      }
      else if (regNu.startsWith("CA 987504")){
        return "Cape Town"
    } 
     else {
       return "Some other place!"
     }
    };

    export default fromWhere;