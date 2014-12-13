(function(angular) {
    angular.module('marineControllers').service('dashboardService', function(ajaxService) {
    var self = this;
    
   
// return {
//    fishingBoatsDetails: function() {
//      return ajaxService.get('scripts/fishingBoats.json');  //1. this returns promise
//    }
//  };
  
  
//   return {
//    fishingLocationDetails: function() {
//      return ajaxService.get('scripts/fishdata.json');  //1. this returns promise
//    }
//  };
  
 

  self.fishingBoatsDetails = function (data, callback) {
            return ajaxService.post({
                url: './scripts/kizandata.json',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
          self.fishingLocationDetails = function (data, callback) {
            return ajaxService.post({
                url: './scripts/fishdata.json',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

   
          
/*
};
    
    this.add = function(a, b) { return a + b };
     
    this.subtract = function(a, b) { return a - b };
     
    this.multiply = function(a, b) { return a * b };
     
    this.divide = function(a, b) { return a / b };


*/
         });
})(angular);
