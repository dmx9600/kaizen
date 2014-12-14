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
            $scope.Emp_Name ="";
            $scope.Emp_EPF="";
            $scope.Emp_UserName="";
            
            
            getDepartment();
            $scope.departmentes = $scope.department[1]; 
            getUser();
            
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
            
            
            $scope.AddEmployee = function (data) {
                var user ={
                    EPF :$scope.Emp_EPF,
                    Name:$scope.Emp_Name,
                    DepartmentId:$scope.departmentes.Id,
                    UserName:$scope.Emp_UserName
                };
                add(user);
            };
            
            function add(user){
                
                 userService.insertUser(angular.toJson(user)).then(function (data) {
                     var f =  data;
                    
                    $scope.$apply();

                });
              
            }

            $scope.clearDepartment = function (data) {

            };


        }]);
})(angular);