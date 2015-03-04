(function(angular) {
    angular.module('marineControllers').factory('boatFactory', ['$http', function($http) {
    var serviceBase = 'http://localhost:1234/vmsservise/';
   // var obj = {};       
      
            return {    
        boat: function(callback) {
                    
                      return $http.get(serviceBase + 'boat'); 
                    
                }
    
            };

        }]);

})(angular);    
         
