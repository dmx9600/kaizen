(function (angular) {
    angular.module('marineControllers').controller("SettingsController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter','departmentService','userService',
        function ($scope, $http, $routeParams, dashboardService, $filter,departmentService,userService) {

            $scope.clickedTab = 1;
            $scope.clickTeb = function (data) {
                $scope.clickedTab = data;
                $scope.$apply();
            };
            $scope.department = [];
            $scope.user = [];

            getDepartment();
            getUser()
            
            $scope.getDepartment = function (data) {
                getDepartment();
            };
            
             $scope.getUser = function (data) {
                getUser()
            };
            
            function getDepartment(){
                 departmentService.getDepartment().then(function (data) {
                    $scope.department = data;
                    $scope.$apply();

                });
            }
            
              function getUser(){
                 userService.getAllUser().then(function (data) {
                    $scope.user = data;
                    $scope.$apply();

                });
            }


            $scope.addDepartment = function (data) {

            };

            $scope.clearDepartment = function (data) {

            };


        }]);
})(angular);