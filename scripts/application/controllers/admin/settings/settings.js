(function (angular) {
    angular.module('marineControllers').controller("SettingsController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter', 'departmentService', 'userService',
        function ($scope, $http, $routeParams, dashboardService, $filter, departmentService, userService) {


            //Common Variables
            $scope.clickedTab = 1;
            $scope.clickTeb = function (data) {
                $scope.clickedTab = data;
                if (data === 2) {
                    loadEmployee();
                }
                if (data === 1) {
                    loadDepartment();
                }
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            };

            //Employee Variables 
            function loadEmployee() {
                //Employee Variables 
                $scope.Emp_Name = "";
                $scope.Emp_EPF = "";
                $scope.Emp_UserName = "";
                $scope.empValidation = false
                $scope.departmentDropDown= [];
                $scope.employeeData = [];
                $scope.employeeVariables = {
                    EPF: "",
                    Name: "",
                    DepartmentId: "",
                    UserName: "",
                };
                getDepartmentDropDown();
                
                getEmployee();
                 if (!$scope.$$phase) {
                        $scope.$apply();
                    }

            }

            //Department Variables 
            function loadDepartment() {
                //Deprtment Variables 
                $scope.department = [];
                getDepartment();
               
                 if (!$scope.$$phase) {
                        $scope.$apply();
                    }
            }

            loadDepartment();


            //Employee Methods 
            $scope.getEmployee = function (data) {
                getEmployee();
            };

            $scope.addEmployee = function () {
                addEmployee();
            };

            function getDepartment() {
                departmentService.getDepartment().then(function (data) {
                    $scope.department = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
            
            function getDepartmentDropDown() {
                departmentService.getDepartment().then(function (data) {
                    $scope.departmentDropDown = data;
                    $scope.departmentes = $scope.departmentDropDown[1];
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }

            function getEmployee() {
                userService.getAllUser().then(function (data) {
                    $scope.employeeData.length = 0;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                    $scope.employeeData = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }

            function addEmployee() {

                if (isEmptyEmployeeObject($scope.employeeVariables)) {
                    $scope.empValidation = true
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    $scope.employeeVariables = {
                        EPF: $scope.Emp_EPF,
                        Name: $scope.Emp_Name,
                        DepartmentId: $scope.departmentes.Id,
                        UserName: $scope.Emp_UserName
                    };
                    userService.insertUser(angular.toJson($scope.employeeVariables)).then(function (data) {
                        clearEmployee();
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    });
                }


            }

            function clearEmployee() {
                $scope.Emp_Name = "";
                $scope.Emp_EPF = "";
                $scope.Emp_UserName = "";
                $scope.empValidation = false
                $scope.employeeData.length = 0;
                $scope.employeeVariables = {
                    EPF: "",
                    Name: "",
                    DepartmentId: "",
                    UserName: "",
                };
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                getEmployee();

            }

            function isEmptyEmployeeObject(user) {
                if (isEmpty(user.EPF) || isEmpty(user.EPF) || isEmpty(user.EPF) || isEmpty(user.EPF)) {
                    return true;
                } else {
                    return false;
                }
            }


            //Deprtment Methods 
            $scope.getDepartment = function (data) {
                getDepartment();
            };

            $scope.addDepartment = function (data) {

            };

            $scope.clearDepartment = function (data) {

            };

            //Common Metods
            function isEmpty(value) {
                return (value === null || value.length === 0);
            }
            ;

        }]);
})(angular);