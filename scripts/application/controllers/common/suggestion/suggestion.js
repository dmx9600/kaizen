(function (angular) {
    angular.module('marineControllers').controller("SuggestionController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter',
        function ($scope, $http, $routeParams, dashboardService, $filter) {


            $scope.navBarItems = ["Dashboard", "Portol", "Suggestion"];
            $scope.togelWrapperclass = "active";
            $scope.clickedTab = 1;
            
            
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





        }]);
})(angular);