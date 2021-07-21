module.exports = function(transFees){
    switch(transFees){
      case "morning":
        return "R20";
      case "afternoon":
            return "R10";
      case "nightshift":
            return "free";
    }
  }