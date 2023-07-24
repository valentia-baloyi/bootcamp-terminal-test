function findItemsOver(list, thold){
    let overThold = [];
    for(let i in list){
        let items = list[i];
          if(items.qty > thold){
               overThold.push(list[i])
           }
    }
  return overThold;

}

export default findItemsOver;