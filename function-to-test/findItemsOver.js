module.exports = function(listObjts, threshold){
    var secArry = [];
    for (var i = 0 ; i < listObjts.length; i++){
      if (listObjts[i].qty > threshold){
        secArry.push(listObjts[i]);
        
      }
    }
    return secArry;
  }