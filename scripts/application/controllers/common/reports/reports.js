(function(angular) {
    angular.module('marineControllers').controller("ReportsController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter',
        function($scope, $http, $routeParams, dashboardService, $filter) {




            $scope.togelWrapperclass = "active";
            $scope.togelWrapper = function() {
                if ($scope.togelWrapperclass == "active") {
                    $scope.togelWrapperclass = "inactive";
                } else {
                    $scope.togelWrapperclass = "active";
                }
              //  $scope.$apply();

            };
            $scope.navBarItems = ["Dashboard", "Reports", "Analytics"];
            $scope.panelheadingText = "Custom Reports";



            $scope.clickImageButton = function(data) {
                //data 1.Custom Reports  /2.Distributor Report /3.Product Sales Report /4.Sales Report
                changePanelheadingText(data);
            };

            function changePanelheadingText(data) {
                switch (data) {
                    case 1:
                        $scope.panelheadingText = "Custom Reports";
                        break;
                    case 2:
                        $scope.panelheadingText = "Distributor Repor";
                        break;
                    case 3:
                        $scope.panelheadingText = "Product Sales Report";
                        break;
                    case 4:
                        $scope.panelheadingText = "Sales Report";
                        break;
                    default:
                        $scope.panelheadingText = "Custom Reports";
                }
                if (!$scope.$$phase)
                    $scope.$apply();
            }

        }]);
})(angular);