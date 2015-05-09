(function(angular) {
    angular.module('marineControllers').controller("NewKaizanController", ['$scope', '$http', 
        '$routeParams',  '$filter','autocompleteFactory','utilityFactory','kaizanCountService',
        function($scope, $http, $routeParams, $filter,autocompleteFactory,utilityFactory,kaizanCountService) { 
             $scope.N_KaizenNo  = "";
              $scope.KaizenStatus  = {
                  Id:1,
                  Name:"New Kaizen"
              };
              $scope.kaizenList = [];
            
             $scope.proposerAutocomplete = autocompleteFactory.proposerAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.proposerData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });
            
             $scope.responsibilityAutocomplete = autocompleteFactory.proposerAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.responsibilityData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });
            
              $scope.departmentAutocomplete = autocompleteFactory.departmentAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.departmenData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });
            kaizenMaxId();
            
                function kaizenMaxId() {                
                if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                kaizanCountService.kaizenMaxId().then(function (data) {
                    var dataval = 0;
                    if(data[0].max === null){
                       dataval =  0; 
                    }else{
                      dataval =  parseInt(data[0].max);
                    }
                    var incval = dataval + 1;
                    $scope.N_KaizenNo = "KAI"+incval;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
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
