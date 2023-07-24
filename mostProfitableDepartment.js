var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];

var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 12006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];

// console.log(salesData.length)
function mostProfitableDepartment(data){
let shopMap = {};

for(let i in data){
    //save the whole data to variable sale
    const sale = data[i];
    //save every department in the shopmap object and gove them each a value of 0  
    shopMap[sale.department] = 0; 
}
//console.log(shopMap);

for(let i in data){
    //save the whole data to variable sale
    const sale = data[i];
    //save every department in the shopmap object and gove them each a value of 0  
    // shopMap[sale.department] = 0;
    
    let currentDepartmentTotal = shopMap[sale.department];
    //add sales to the current department total.
    currentDepartmentTotal += sale.sales;
    //save the total of the  department sales total in the department
    shopMap[sale.department] = currentDepartmentTotal;


}
//console.log(shopMap);
  
  
let highestSale = 0;
let highestDepartment = "";
//loop over the shopMap to compare the values of the sales
for(let x in shopMap){
    //x returns the key values (name of departments)
    //console.log(x)
    //we display the sales values
    //console.log(shopMap[x])
    //set current department sale
    const currentDepartmentSale = shopMap[x];

    if(currentDepartmentSale > highestSale){
        //set the current department sales equal to highest if it is.
        highestSale = currentDepartmentSale;
        //set the corresponding department to highest department
        highestDepartment = x;

    }


}

// console.log(highestSale);
return highestDepartment
}

console.log(mostProfitableDepartment(salesData))
console.log(mostProfitableDepartment(salesData2))


function mostProfitableDay(data){
	let dayMap = {}
    
    for(let i in data){
    	let days = data[i]
        
        dayMap[days.day] = 0;
    }
  
 	for(let x in data){
    	let days = data[x];
      	let currentDayTotal = dayMap[days.day];
      
      	currentDayTotal += days.sales
      	dayMap[days.day] = currentDayTotal;
    }
  	
  //return dayMap;
  
  let highestSaleDay = 0;
  let highestDay = "";
  
  for(let i in dayMap){
  	console.log(i);
    console.log(dayMap[i])
    if(dayMap[i] > highestSaleDay){
      		highestSaleDay = dayMap[i];
      		highestDay = i;
       }
  }
  
  console.log(highestSaleDay)
  return highestDay;
  
}

console.log(mostProfitableDay(salesData))

export default mostProfitableDay;