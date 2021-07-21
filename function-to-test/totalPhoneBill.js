module.exports = function(totalBill){
 
    var arr = totalBill.split(',');//convert the string to an arry 
    var call = [];//empty arry 
    var sms = [];//empty arry
    
    for (var i =  0; i < arr.length; i++){
     var newArry = arr[i].trim();
      if (newArry.startsWith("call")){
        call.push(newArry);//pushing all the push results in to a newArry
      }
      if (newArry.startsWith("sms")){
          sms.push(newArry);//pushing all the push results in to a newArry
          }
    }
    return "R" + (call.length * (2.75) + sms.length * (0.65)).toFixed(2);//return result
  }//end of function 
