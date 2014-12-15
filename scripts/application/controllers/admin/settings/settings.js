(function (angular) {
    angular.module('marineControllers').controller("SettingsController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter', 'departmentService', 'userService',
        function ($scope, $http, $routeParams, dashboardService, $filter, departmentService, userService) {

            $scope.clickedTab = 1;
            $scope.clickTeb = function (data) {
                $scope.clickedTab = data;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            };
            $scope.department = [];
            $scope.user = [];
            $scope.Emp_Name = "";
            $scope.Emp_EPF = "";
            $scope.Emp_UserName = "";
            $scope.empValidation = false

            getDepartment();
            $scope.departmentes = $scope.department[1];
            getUser();

            $scope.getDepartment = function (data) {
                getDepartment();
            };

            $scope.getUser = function (data) {
                getUser();
            };

            function getDepartment() {
                departmentService.getDepartment().then(function (data) {
                    $scope.department = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }

                });
            }

            function getUser() {
                userService.getAllUser().then(function (data) {
                    $scope.user.length = 0;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                    $scope.user = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }

                });
            }

            $scope.addDepartment = function (data) {

            };

            $scope.AddEmployee = function (data) {
                add();
            };

            function add() {

                if (!isEmpty(user)) {
                    var user = {
                        EPF: $scope.Emp_EPF,
                        Name: $scope.Emp_Name,
                        DepartmentId: $scope.departmentes.Id,
                        UserName: $scope.Emp_UserName
                    };

                    if (isEmptyUserObject(user)) {
                        $scope.empValidation = true
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    } else {
                        userService.insertUser(angular.toJson(user)).then(function (data) {
                            var f = data;
                            if (!$scope.$$phase) {
                                $scope.$apply();
                            }

                        });
                    }
                } else {
                    $scope.empValidation = true
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                }

            }

            function   isEmptyUserObject(user) {
                if (isEmpty(user.EPF) || isEmpty(user.EPF) || isEmpty(user.EPF) || isEmpty(user.EPF)) {
                    return true;
                } else {
                    return false;
                }
            }

            $scope.clearDepartment = function (data) {

            };

            function isEmpty(value) {
                return (value == null || value.length === 0);
            }
            ;

        }]);
})(angular);