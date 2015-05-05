(function (angular) {
    angular.module('marineControllers').controller("SuggestionApprovalController", ['$scope', '$http',
        '$routeParams', '$filter', 'kaizanCountService',
        function ($scope, $http, $routeParams, $filter, kaizanCountService) {

            $scope.suggestionList = [];


            $scope.aprove = function (data) {
               // clickEdit(data)
                //initialization();
            };
            
            $scope.reject = function (data) {
                //clickEdit(data)
                //initialization();
            };

            function getSuggestion(data1, data2) {
                var obj = {
                    "MonthId": data1,
                    "KaizenStatus": data2
                };
                $scope.suggestionList.length = 0;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                kaizanCountService.getSuggestion(obj).then(function (data) {
                    $scope.suggestionList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
            getSuggestion(0, 0);


        }]);
})(angular);