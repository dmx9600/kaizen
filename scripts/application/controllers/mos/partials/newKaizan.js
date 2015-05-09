(function(angular) {
    angular.module('marineControllers').controller("NewKaizanController", ['$scope', '$http',
        '$routeParams', '$filter', 'autocompleteFactory', 'utilityFactory', 'kaizanCountService',
        function($scope, $http, $routeParams, $filter, autocompleteFactory, utilityFactory, kaizanCountService) {
            $scope.N_KaizenNo = "";
            $scope.KaizenStatus = {
                Id: 7,
                Name: "New Kaizen"
            };
             $scope.KaizanDate = $filter('date')(new Date(), 'MMM dd yyyy');
            
            $scope.kaizenList = [];

            $scope.benefits = {
                "Safety": 0,
                "Quality": 0,
                "Delivery": 0,
                "Cost": 0,
                "Morale": 0,
                "Environment": 0,
                "S6": 0,
                "Productivity": 0
            };

            $scope.proposerAutocomplete = autocompleteFactory.proposerAutocomplete(function(current) {
                if (utilityFactory.isDirty($scope.proposerData, current)) {
                    $scope.proposerData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                    if (!$scope.$$phase) {
                    $scope.$apply();
                }
                }
            });

            $scope.responsibilityAutocomplete = autocompleteFactory.proposerAutocomplete(function(current) {
                if (utilityFactory.isDirty($scope.responsibilityData, current)) {
                    $scope.responsibilityData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                    if (!$scope.$$phase) {
                    $scope.$apply();
                }
                }
            });

            $scope.departmentAutocomplete = autocompleteFactory.departmentAutocomplete(function(current) {
                if (utilityFactory.isDirty($scope.departmenData, current)) {
                    $scope.departmenData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                    
                    if (!$scope.$$phase) {
                    $scope.$apply();
                }
                }
            });
            kaizenMaxId();

            function kaizenMaxId() {
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                kaizanCountService.kaizenMaxId().then(function(data) {
                    var dataval = 0;
                    if (data[0].max === null) {
                        dataval = 0;
                    } else {
                        dataval = parseInt(data[0].max);
                    }
                    var incval = dataval + 1;
                    $scope.N_KaizenNo = "KAI" + incval;
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

                kaizanCountService.getAllKaizen().then(function(data) {
                    $scope.kaizenList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }


            $scope.clickAddKaizen = function() {
                addKaizen();
            };

            function addKaizen() {            

                $scope.benefits.Safety = true ? 1 : 0;
                $scope.benefits.Quality = true ? 1 : 0;
                $scope.benefits.Delivery = true ? 1 : 0;
                $scope.benefits.Cost = true ? 1 : 0;
                $scope.benefits.Morale = true ? 1 : 0;
                $scope.benefits.Environment = true ? 1 : 0;
                $scope.benefits.S6 = true ? 1 : 0;
                $scope.benefits.Productivity = true ? 1 : 0;

                kaizanCountService.insertBenefits(angular.toJson($scope.benefits)).then(function(data) {
                    var benefits = data;
                    var benefitsId = data[0].max;
                    addNewKaizen(benefitsId);
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }

                });
            }
            
             function addNewKaizen(benefitsId) {                 
                  $scope.suggestionVariables = {
                    KaizanNo: $scope.N_KaizenNo,
                    Date: new Date(),
                    ProposerId: $scope.proposerData.Id,
                    ResponsibleId: $scope.responsibilityData.Id,
                    KaizenStatusId: $scope.KaizenStatus.Id,
                    Suggestion: $scope.suggestion,
                    DepartmentId: $scope.departmenData.Id,
                    BenefitsId: benefitsId,
                    CostSaving: $scope.cost,
                    TimeImprovement: $scope.timeImprovement,
                    Comment: $scope.comment
                };
                
                kaizanCountService.insertKiazan(angular.toJson($scope.suggestionVariables)).then(function(data) {
                    getKaizen();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }

                });
             }

        }]);
})(angular);
