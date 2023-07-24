function regCheck(regNu, regLo) {
    if(regNu.includes("GP")&&regLo.includes("GP") || regNu.includes("EC")&&regLo.includes("EC") || regNu.includes("MP")&&regLo.includes("MP") || regNu.includes("L")&&regLo.includes("L")){
      return true; 
    }
    else {
      return false;
    }
    }

    export default regCheck;