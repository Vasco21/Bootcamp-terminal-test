module.exports = function(profitDep){
    //console.log(profitDep);
    const addDeptMap = {};
    
    for (var i in profitDep){
      
      const addDept = profitDep[i];
      addDeptMap[addDept.department] = 0;
    }
    //console.log(addDeptMap);
    
   for(var i in  profitDep){
      const addDept = profitDep[i];
      
      var currentDeptTotal = addDeptMap[addDept.department];
      currentDeptTotal += addDept.sales;
      addDeptMap[addDept.department] = currentDeptTotal; 
    }
    //console.log(addDeptMap)
    //Most profitable department
    var currentMaxsales = 0;
    var currentPro = "";
   
    for (const mostProfit in addDeptMap){
      //console.log(mostProfit);
      //console.log(addDeptMap[mostProfit]);
      const currentProSales = addDeptMap[mostProfit];
      if( currentProSales > currentMaxsales){
        currentMaxsales = currentProSales;
        currentPro = mostProfit;
      }
    }
    return  currentPro;
    //console.log(currentMaxsales);
    //console.log(currentPro);
  }
  function mostProfitableDay(profitDay){
    //console.log(profitDay);
    const addDayMap = {};
    
    for (var i in profitDay){
      
      const addDept = profitDay[i];
      addDayMap[addDept.day] = 0;
    }
    //console.log(addDayMap);mostProfitableDaystProfitableDay
    
   for(var i in  profitDay){
      const addDept = profitDay[i];
      
      var currentDeptTotal = addDayMap[addDept.day];
      currentDeptTotal += addDept.sales;
      addDayMap[addDept.day] = currentDeptTotal; 
    }
    //console.log(addDayMap)
    //Most profitable day
    var currentMaxDays = 0;
    var currentPro = "";
   
    for (const mostProfit in addDayMap){
      //console.log(mostProfit);
      //console.log(addDayMap[mostProfit]);
      const currentProDay = addDayMap[mostProfit];
      if( currentProDay > currentMaxDays){
        currentMaxDays = currentProDay;
        currentPro = mostProfit;
      }
    }
    return  currentPro;
    //console.log(currentMaxDays);
    //console.log(currentPro);
}