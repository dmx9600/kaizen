(function(angular) {
    angular.module('myApp').controller("RootController", ['$scope', '$http', '$routeParams',  '$filter', '$location','$timeout',
        function($scope, $http, $routeParams, $filter, $location,$timeout) {

            //$scope.search = "Search Valueas";


            $scope.myFunc = function() {
                if ($scope.search === 'm') {
                    $location.path('/monitor');
                }
                 if ($scope.search === 'd') {
                    $location.path('/dashboard');
                }
                 if ($scope.search === 's') {
                    $location.path('/settings');
                }
                 if ($scope.search === 'f') {
                    $location.path('/fullmonitor');
                }
                 if ($scope.search === 'h') {
                    $location.path('/help');
                }                
                if ($scope.search === 'p') {
                    $location.path('/profile');
                }
                if ($scope.search === 'r') {
                    $location.path('/reports');
                }
                if ($scope.search === 'a') {
                    $location.path('/analytics');
                }
                $scope.$apply();
            };


            $scope.clock = "loading clock..."; // initialise the time variable
            $scope.tickInterval = 1000; //ms

            var tick = function() {
                $scope.clock = Date.now(); // get the current time
                $timeout(tick, $scope.tickInterval); // reset the timer
            };
            // Start the timer
            $timeout(tick, $scope.tickInterval);

        }]);
})(angular);
