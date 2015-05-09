(function(angular) {
    angular.module('marineControllers').controller("KaizanApprovalController", ['$scope',
        '$http', '$routeParams',  '$filter','autocompleteFactory','utilityFactory','kaizanCountService',
        function($scope, $http, $routeParams, $filter,autocompleteFactory,utilityFactory,kaizanCountService) { 
            
            $scope.kaizenList = [];
               getKaizen();
                  function getKaizen() {
               
                $scope.kaizenList.length = 0;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                
//                var obj = {
//                    "MonthId": 0,
//                    "KaizenStatus": 4
//                };
                
                kaizanCountService.getAllKaizen().then(function (data) {
                    $scope.kaizenList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
            
            
        }]);
})(angular);