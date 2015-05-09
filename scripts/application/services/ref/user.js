(function (angular) {
    angular.module('marineControllers').service('userService', function (ajaxService) {
        var self = this;


        self.getAllUser = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/User',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.getUserById = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/UserById',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.insertUser = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/UserInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
         self.updateUser = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/UserUpdate',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        
        
         self.deleteUser = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/UserDelete',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        


    });
})(angular);