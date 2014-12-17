(function (angular) {
    angular.module('marineControllers').service('kaizanCountService', function (ajaxService) {
        var self = this;
        
          self.getAllKiazanCout = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:1234/kiazanmsservice/KiazanCout',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
          self.insertKiazanCout = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:1234/kiazanmsservice/KiazanCoutInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
    });
})(angular);
