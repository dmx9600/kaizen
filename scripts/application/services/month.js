(function(angular) {
    angular.module('marineControllers').service('monthService', function(ajaxService) {
    var self = this;
    
self.getMonths = function (data, callback) {
            return ajaxService.post({
                url: './scripts/json/month.json',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
         });
})(angular);
