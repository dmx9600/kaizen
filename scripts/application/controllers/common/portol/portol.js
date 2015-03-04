(function (angular) {
    angular.module('marineControllers').controller("PortolController", ['$scope', '$http', '$routeParams', 'dashboardService',
        '$filter', '$modal', 'monthService','kaizanCountService','departmentService','autocompleteFactory','utilityFactory',
        function ($scope, $http, $routeParams, dashboardService, $filter, $modal, monthService,kaizanCountService,departmentService,autocompleteFactory,utilityFactory) {

            $scope.togelWrapperclass = "active";
            $scope.clickedTab = 1;
            $scope.month = [];
            $scope.kaizanCountGrid =[];
            $scope.monthData = {
                        Id: 0,
                        Name: ""
                    };
            
            $scope.navBarItems = ["Dashboard", "Portol", "Suggestion"];
            loadMonths();
            getDepartmentDropDown();
            getKaizanCount();
            $scope.togelWrapper = function () {
                if ($scope.togelWrapperclass == "active") {
                    $scope.togelWrapperclass = "inactive";
                } else {
                    $scope.togelWrapperclass = "active";
                }
            };

            $scope.clickTeb = function (data) {
                $scope.clickedTab = data;

            };

            function loadMonths() {
                monthService.getMonths().then(function (data) {
                    $scope.month = data;
                    $scope.months = $scope.month[new Date().getMonth()];
                      if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            };
            
             
            $scope.monthAutoComplete = autocompleteFactory.monthAutoComplete(function (current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.monthData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });
            
             function getDepartmentDropDown() {
                departmentService.getDepartment().then(function (data) {
                    $scope.departmentDropDown = data;
                    $scope.departmentes = $scope.departmentDropDown[1];
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
            
            
            function getKaizanCount() {
                kaizanCountService.getAllKiazanCout().then(function (data) {
                    $scope.kaizanCountGrid = data;                    
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }

        }]);
})(angular);