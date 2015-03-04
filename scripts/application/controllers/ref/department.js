(function (angular) {
    angular.module('marineControllers').controller("DepartmentController", ['$scope', '$http', '$routeParams', '$filter', 'departmentService', 'userService',
        function ($scope, $http, $routeParams, $filter, departmentService) {

getDepartmentDropDown();
loadDepartment();

  //Department Variables 
            function loadDepartment() {
                //Deprtment Variables 
                $scope.isupdate = false
                $scope.department = [];
                $scope.Dep_Id = "";
                $scope.Dep_Name = "";
                getDepartment();

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }
            
            

            //Deprtment Methods 
            $scope.getDepartment = function (data) {
                getDepartment();
            };

            $scope.addDepartment = function (data) {
                addDepartment();
            };

            $scope.clickEditDepartment = function (data) {
                clickEditDepartment(data);
            };

            $scope.editDepartment = function (data) {
                editDepartment(data);
            };

            $scope.clearDepartment = function (data) {
                clearDepartment();
            };

            $scope.deleteDepartment = function (Id) {
                deleteDepartment(Id);
            };

            function deleteDepartment(DepId) {
                var dep = {
                    Id: DepId
                };
                departmentService.deleteDepartment(angular.toJson(dep)).then(function (data) {
                    var val = data;
                    clearDepartment();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }

            function clickEditDepartment(data) {
                $scope.isupdate = true
                $scope.Dep_Id = data.Id;
                $scope.Dep_Name = data.DepartmentName;
            }

            function editDepartment(data) {              
                
                   if (isEmptyDepartmentObject()) {
                    $scope.depValidation = true;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    $scope.departmentVariables = {
                        DepartmentName: $scope.Dep_Name,                       
                        ModifyDate: new Date(),
                        ModifyUserId: 1
                    };

                    var obj = {
                        department: $scope.departmentVariables,
                        Id: $scope.Dep_Id 
                    };
                    
                     departmentService.updateDepartment(angular.toJson(obj)).then(function (data) {
                    var val = data;
                    clearDepartment();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });

                   
                }
                
            }
            
            function clearDepartment() {
                $scope.isupdate = false;
                $scope.department.length = 0;
                $scope.Dep_Name = "";
                getDepartment();
            }

            function addDepartment() {

                if (isEmptyDepartmentObject()) {
                    $scope.depValidation = true;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    $scope.departmentVariables = {
                        DepartmentName: $scope.Dep_Name,
                        StatusId: 1,
                        CreateDate: new Date(),
                        CreateUserId: 1,
                        ModifyDate: new Date(),
                        ModifyUserId: 1
                    };
                    departmentService.insertDepartment(angular.toJson($scope.departmentVariables)).then(function (data) {
                        var dep = data;
                        clearDepartment();
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    });
                }

            }

            function isEmptyDepartmentObject() {
                if (isEmpty($scope.Dep_Name)) {
                    return true;
                } else {
                    return false;
                }
            }

            function getDepartment() {
                departmentService.getDepartment().then(function (data) {
                    $scope.department = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
          
             //Common Metods
            function isEmpty(value) {
                return (value === null || value.length === 0);
            };
            
        }]);
})(angular);