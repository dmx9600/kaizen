(function(angular) {
    angular.module('marineControllers').service('listService', function(ajaxService) {
   
 return {
    detItemDetails: function() {
      return ajaxService.get('scripts/data.json');  //1. this returns promise
    }
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

