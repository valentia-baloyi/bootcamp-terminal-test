   function countAllFromTown(reg, regTown){
    let count = 0;
    
    let regArr = reg.split(",");
    for (let v in regArr){
     let trimmed = regArr[v].trim();
     if(trimmed.startsWith(regTown)){
        count += 1;
     } 
    }
     return count;
    }

    export default countAllFromTown;