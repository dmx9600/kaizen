(function (angular) {
    angular.module('marineControllers').controller("SuggestionStatusController", ['$scope', '$http',
        '$routeParams', '$filter', 'kaizanCountService', 'autocompleteFactory', 'utilityFactory',
        function ($scope, $http, $routeParams, $filter, kaizanCountService, autocompleteFactory, utilityFactory) {
            
            
            $scope.monthData = {Id: 0, Name: ""};
            $scope.statusbyModule = {Id: 4,Name: "New Suggestion"};
            $scope.suggestionList = [];
            
            kaizanCountService.moduleStatusId = 2;
            
            $scope.monthAutoComplete = autocompleteFactory.monthAutoComplete(function (current) {
                if (utilityFactory.isDirty($scope.monthData, current)) {
                    $scope.monthData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                    getSuggestion($scope.monthData.Id,$scope.statusbyModule.Id);
                }
            });

            $scope.statusbyModuleAutocomplete = autocompleteFactory.statusbyModuleAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.monthData, current)) {
                    $scope.statusbyModule = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                    getSuggestion($scope.monthData.Id, $scope.statusbyModule.Id);
                }
            });




            $scope.change = function () {
                if ($scope.monthData.Name === "" || $scope.monthData.Name == null) {
                    getSuggestion(0, 0);
                }
            };

            function getSuggestion(data1, data2) {
                $scope.suggestionList = [];
                $scope.suggestionList.length = 0;
                var obj = {
                    "MonthId": data1,
                    "KaizenStatus": data2
                };
               
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