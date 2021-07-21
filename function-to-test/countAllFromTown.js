module.exports = function(regNum, regNoStr){
    var arr = regNum.split(',');//convert string in to an arry 
    var newArry = [];//an empty arry 
    
    for(var i = 0; i < arr.length; i++){
      var allReg = arr[i].trim(); //stripp of whitespace from both sides
      if(allReg.startsWith(regNoStr)){
       newArry++; 
      }
    }
    return newArry;//return the results
  }//end of function 