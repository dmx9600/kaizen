(function (angular) {
    angular.module('marineControllers').controller("PortolController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter', '$modal', 'monthService',
        function ($scope, $http, $routeParams, dashboardService, $filter, $modal, monthService) {

            $scope.togelWrapperclass = "active";
            $scope.clickedTab = 1;
            $scope.month = [];
            $scope.navBarItems = ["Dashboard", "Portol", "Suggestion"];
            loadMonths();


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
                    $scope.$apply();

                });
            };

        }]);
})(angular);