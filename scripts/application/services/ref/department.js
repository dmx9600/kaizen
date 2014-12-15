(function(angular) {
    angular.module('marineControllers').service('departmentService', function(ajaxService) {
    var self = this;
    
    
     self.getDepartment = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:1234/kiazanmsservice/department',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };    
        
          self.getDepartmentById = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:1234/kiazanmsservice/departmentId',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };    
        
        self.insertDepartment = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:1234/kiazanmsservice/DepartmentInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };    
    
    
             });
})(angular);