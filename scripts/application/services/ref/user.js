(function(angular) {
    angular.module('marineControllers').service('userService', function(ajaxService) {
    var self = this;
    
    
     self.getAllUser = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:1234/kiazanmsservice/User',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };    
        
          self.getUserById = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:1234/kiazanmsservice/UserById',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };    
    
    
             });
})(angular);