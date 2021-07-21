module.exports = function(listObj){
    var arr = [];
    for (var i = 0; i < listObj.length; i++){
      if (listObj[i].qty > 20){
        arr.push(listObj[i]);
        }
    }
    return arr
  }
  
  function findItemsOver(listObjts, threshold){
    var secArry = [];
    for (var i = 0 ; i < listObjts.length; i++){
      if (listObjts[i].qty > threshold){
        secArry.push(listObjts[i]);
        
      }
    }
    return secArry;
  }
