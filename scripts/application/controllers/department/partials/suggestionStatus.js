(function(angular) {
    angular.module('marineControllers').controller("SuggestionStatusController", ['$scope', '$http', 
        '$routeParams',  '$filter','kaizanCountService',
        function($scope, $http, $routeParams, $filter,kaizanCountService) { 
            $scope.Name = "ddd";

            $scope.suggestionList =[];
            
                
            
            
            function getSuggestion() {
                $scope.suggestionList.length = 0;
                if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                kaizanCountService.getSuggestion().then(function (data) {
                    $scope.suggestionList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
             getSuggestion();   
            
        }]);
})(angular);