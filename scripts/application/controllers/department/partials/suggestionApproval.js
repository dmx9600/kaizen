(function(angular) {
    angular.module('marineControllers').controller("SuggestionApprovalController", ['$scope', '$http',
        '$routeParams', '$filter', 'kaizanCountService', 'autocompleteFactory', 'utilityFactory',
        function($scope, $http, $routeParams, $filter, kaizanCountService, autocompleteFactory, utilityFactory) {

            $scope.suggestionList = [];
            $scope.monthData = {Id: 0, Name: ""};
            $scope.statusbyModule = {Id: 4, Name: "New Suggestion"};


            kaizanCountService.moduleStatusId = 2;

            $scope.monthAutoComplete = autocompleteFactory.monthAutoComplete(function(current) {
                if (utilityFactory.isDirty($scope.monthData, current)) {
                    $scope.monthData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                    getSuggestion($scope.monthData.Id, $scope.statusbyModule.Id);
                }
            });

            $scope.statusbyModuleAutocomplete = autocompleteFactory.statusbyModuleAutocomplete(function(current) {
                if (utilityFactory.isDirty($scope.monthData, current)) {
                    $scope.statusbyModule = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                    getSuggestion($scope.monthData.Id, $scope.statusbyModule.Id);
                }
            });


            $scope.approve = function(data) {
                approve(data);
                //initialization();  getSuggestion($scope.monthData.Id, $scope.statusbyModule.Id);
            };

            function approve(data) {



                var obj = {
                    "Id": data.Id,
                    "Approval": 5
                };

                if (!$scope.$$phase) {
                    $scope.$apply();
                }

                kaizanCountService.approvalSuggestion(angular.toJson(obj)).then(function(data) {
                    getSuggestion(0, 0);
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });

                getSuggestion(0, 0);

            }


            function reject(data) {
                var obj = {
                    "Id": data.Id,
                    "Approval": 6
                };

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                kaizanCountService.approvalSuggestion(angular.toJson(obj)).then(function(data) {
                    //$scope.suggestionList.length = 0;
                    getSuggestion(0, 0);
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });


            }
            $scope.reject = function(data) {
                reject(data);
                //initialization();
            };

            $scope.change = function() {
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
                kaizanCountService.getSuggestion(obj).then(function(data) {
                    $scope.suggestionList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }

            getSuggestion(0, 0);


        }]);
})(angular);