(function (angular) {
    angular.module('marineControllers').service('departmentService', function (ajaxService) {
        var self = this;


        self.getDepartment = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/Department',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.getDepartmentById = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/DepartmentId',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.insertDepartment = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/DepartmentInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };


        self.deleteDepartment = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/DepartmentDelete',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.updateDepartment = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/DepartmentUpdate',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };





    });
})(angular);