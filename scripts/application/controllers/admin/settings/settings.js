(function (angular) {
    angular.module('marineControllers').controller("SettingsController", ['$scope', '$http', '$routeParams', '$filter', 'departmentService', 'userService',
        function ($scope, $http, $routeParams, $filter, departmentService, userService) {


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
            $scope.isupdate = false

            //Employee Variables 
            function loadEmployee() {
                $scope.isupdate = false
                //Employee Variables 
                $scope.Emp_Id = "";
                $scope.Emp_Name = "";
                $scope.Emp_EPF = "";
                $scope.Emp_UserName = "";
                $scope.empValidation = false
                $scope.departmentDropDown = [];
                $scope.employeeData = [];
                $scope.employeeVariables = {
                    EPF: "",
                    Name: "",
                    DepartmentId: "",
                    UserName: "",
                    StatusId: "",
                    CreateDate: "",
                    CreateUserId: "",
                    ModifyDate: "",
                    ModifyUserId: "",
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
                $scope.isupdate = false
                $scope.department = [];
                $scope.Dep_Id = "";
                $scope.Dep_Name = "";
                getDepartment();

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }

            loadDepartment();


            //Employee Methods 
            $scope.clearEmployee = function () {
                clearEmployee();
            };

            $scope.getEmployee = function (data) {
                getEmployee();
            };

            $scope.addEmployee = function () {
                addEmployee();
            };

            $scope.clickEditEmployee = function (data) {
                clickEditEmployee(data);
            };

            $scope.editEmployee = function (data) {
                editEmployee();
            };

            $scope.deleteEmployee = function (Id) {
                deleteEmployee(Id);
            };

            function clickEditEmployee(data) {
                $scope.Emp_Name = data.EMPName;
                $scope.Emp_EPF = data.EPF;
                $scope.Emp_UserName = data.UserName;
                $scope.Emp_Id = data.UserId;
                $scope.isupdate = true;
                // $scope.departmentes.Id =data.DepartmentId;
                // $scope.departmentes.DepartmentName =data.DepartmentName; 
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }

            function editEmployee() {

                if (isEmptyEmployeeObject()) {
                    $scope.empValidation = true
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {



                    $scope.employeeVariables = {
                        EPF: $scope.Emp_EPF,
                        Name: $scope.Emp_Name,
                        DepartmentId: $scope.departmentes.Id,
                        UserName: $scope.Emp_UserName,
                        ModifyDate: new Date(),
                        ModifyUserId: 1
                    };

                    var obj = {
                        user: $scope.employeeVariables,
                        Id: $scope.Emp_Id
                    };

                    userService.updateUser(angular.toJson(obj)).then(function (data) {
                        var emp = data;
                        clearEmployee();
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    });
                }

            }

            function deleteEmployee(EmpId) {
                var emp = {
                    Id: EmpId
                };

                userService.deleteUser(angular.toJson(emp)).then(function (data) {
                    var val = data;
                    clearEmployee();
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

                if (isEmptyEmployeeObject()) {
                    $scope.empValidation = true
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    $scope.employeeVariables = {
                        EPF: $scope.Emp_EPF,
                        Name: $scope.Emp_Name,
                        DepartmentId: $scope.departmentes.Id,
                        UserName: $scope.Emp_UserName,
                        StatusId: 1,
                        CreateDate: new Date(),
                        CreateUserId: 1,
                        ModifyDate: new Date(),
                        ModifyUserId: 1
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
                $scope.empValidation = false;
                $scope.isupdate = false;
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

            function isEmptyEmployeeObject() {
                if (isEmpty($scope.Emp_EPF) || isEmpty($scope.Emp_Name) || isEmpty($scope.Emp_UserName) || isEmpty($scope.departmentes.Id)) {
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