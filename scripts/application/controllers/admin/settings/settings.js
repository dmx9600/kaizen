(function(angular) {
    angular.module('marineControllers').controller("SettingsController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter',
        function($scope, $http, $routeParams, dashboardService, $filter) {           

    $scope.clickedTab = 1;    
    $scope.clickTeb = function(data) {
                 $scope.clickedTab  = data;            
                $scope.$apply();
    };
    
//    $scope.templates =
//      [ { name: 'dashboard', url: '/dashboard'},
//        { name: 'dashboard', url: '/dashboard'} ];
//    $scope.template = $scope.templates[0];


        }]);
})(angular);