(function(angular) {
    angular.module('marineControllers').controller("KaizanApprovalController", ['$scope',
        '$http', '$routeParams', '$filter', 'autocompleteFactory', 'utilityFactory', 'kaizanCountService',
        function($scope, $http, $routeParams, $filter, autocompleteFactory, utilityFactory, kaizanCountService) {

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

                kaizanCountService.getAllKaizen().then(function(data) {
                    $scope.kaizenList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }

            $scope.approve = function(data) {
                approve(data);              
            };
            function approve(data) {
                var obj = {
                    "Id": data.Id,
                    "Approval": 8
                };

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                kaizanCountService.approvalKaizen(angular.toJson(obj)).then(function(data) {
                   getKaizen();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });

             

            }
            function reject(data) {
                var obj = {
                    "Id": data.Id,
                    "Approval": 9
                };

                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                kaizanCountService.approvalKaizen(angular.toJson(obj)).then(function(data) {
                  getKaizen();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });


            }
            $scope.reject = function(data) {
                reject(data);               
            };


        }]);
})(angular);