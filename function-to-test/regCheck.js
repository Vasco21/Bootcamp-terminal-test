module.exports = function(regNumber, regPlate){
    return regNumber.endsWith(regPlate);
  }