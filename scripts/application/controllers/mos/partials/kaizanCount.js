(function(angular) {
    angular.module('marineControllers').controller("KaizanCountController", ['$scope', '$http', '$routeParams',
        '$filter', 'kaizanCountService', 'autocompleteFactory', 'utilityFactory',
        function($scope, $http, $routeParams, $filter, kaizanCountService, autocompleteFactory, utilityFactory) {

            $scope.kaizanCountList = [];
            $scope.kaizanCount = 0;
            $scope.departmentData = {
                Id: 0,
                Name: ""
            };
            $scope.monthData = {
                Id: 0,
                Name: ""
            };
            $scope.yearData = {
                Id: 0,
                Name: ""
            };

            $scope.monthAutoComplete = autocompleteFactory.monthAutoComplete(function(current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.monthData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });

            $scope.yearAutoComplete = autocompleteFactory.yearAutoComplete(function(current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.yearData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });

            $scope.departmentAutocomplete = autocompleteFactory.departmentAutocomplete(function(current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.departmentData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });

            $scope.clickAddKaizanCount = function() {
                addKaizanCount();
            };

            $scope.clickClearKaizanCount = function() {
                clearKaizanCount();
            };

            function getKaizanCount() {
                $scope.kaizanCountList.length = 0;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                kaizanCountService.getAllKiazanCout().then(function(data) {
                    $scope.kaizanCountList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
            getKaizanCount();



            function clearKaizanCount() {
                $scope.kaizanCount = 0;
                $scope.departmentData = {
                    Id: 0,
                    Name: ""
                };
                $scope.monthData = {
                    Id: 0,
                    Name: ""
                };
                $scope.yearData = {
                    Id: 0,
                    Name: ""
                };

            }

            function addKaizanCount() {


                $scope.kaizanCountVariables = {
                    YearId: $scope.yearData.Id,
                    MonthId: $scope.monthData.Id,
                    DepartmentId: $scope.departmentData.Id,
                    KaizenCount: $scope.kaizanCount,
                    StatusId: 1,
                    CreateDate: new Date(),
                    CreateUserId: 1,
                    ModifyDate: new Date(),
                    ModifyUserId: 1
                };
                kaizanCountService.insertKiazanCout(angular.toJson($scope.kaizanCountVariables)).then(function(data) {
                    //clearEmployee();
                    getKaizanCount();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });



            }

            function isEmptyEmployeeObject() {
                if (isEmpty($scope.departmentData) || isEmpty($scope.Emp_Name) || isEmpty($scope.Emp_UserName) || isEmpty($scope.departmentes.Id)) {
                    return true;
                } else {
                    return false;
                }
            }
            ;

            function isEmpty(value) {
                return (value === null || value.length === 0);
            }
            ;




        }]);
})(angular);
