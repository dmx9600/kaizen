(function (angular) {
    angular.module('marineControllers').controller("NewSuggestionController", ['$scope', '$http', '$routeParams', '$filter', 'kaizanCountService',
        function ($scope, $http, $routeParams, $filter, kaizanCountService) {

            $scope.Nsug_SuggestionNo = "";
            $scope.Nsug_Month = $filter('date')(new Date(), 'MMM dd yyyy');
            $scope.Nsug_Proposer = "Kasun Sampath";
            $scope.Nsug_KaizenStatus = "New Suggestion";
            $scope.Nsug_Suggestion = "";
            $scope.Nsug_Comment = "";
            $scope.Nsug_SuggestionId = 0;
            $scope.suggestionList = [];
            initialization();
            $scope.clickAddSuggestion = function () {
                addSuggestion();
                initialization();
            };
            
              $scope.clickEditSuggestion = function (data) {
                edit(data); 
                initialization();
            };
              $scope.clickEdit = function (data) {
                clickEdit(data) 
                //initialization();
            };
            $scope.clearSuggestion = function () {
                clear();
                initialization();
            };
           
            function addSuggestion() {
                $scope.suggestionVariables = {
                    SuggestionNo: $scope.Nsug_SuggestionNo,
                    Date: new Date(),
                    ProposerId: 1,
                    KaizenStatusId: 4,
                    Suggestion: $scope.Nsug_Suggestion,
                    Comment: $scope.Nsug_Comment
                };
                kaizanCountService.insertSuggestion(angular.toJson($scope.suggestionVariables)).then(function (data) {
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                    getSuggestion();
                });
            }
            //  suggestionMaxId();
            function suggestionMaxId() {
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                kaizanCountService.suggestionMaxId().then(function (data) {
                    var dataval = 0;
                    if (data[0].max === null) {
                        dataval = 0;
                    } else {
                        dataval = parseInt(data[0].max);
                    }
                    var incval = dataval + 1;
                    $scope.Nsug_SuggestionNo = "SUGG" + incval;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
      
            function initialization() {
                clear();
                suggestionMaxId();
                getSuggestion();
            }
         
            function clear() {
                $scope.Nsug_SuggestionNo = "";
                $scope.Nsug_Month = $filter('date')(new Date(), 'MMM dd yyyy');
                $scope.Nsug_Proposer = "Kasun Sampath";
                $scope.Nsug_KaizenStatus = "New Suggestion";
                $scope.Nsug_Suggestion = "";
                $scope.Nsug_Comment = "";
                $scope.Nsug_SuggestionId = 0;
            }
       
            function getSuggestion() {
               
                $scope.suggestionList.length = 0;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                
                var obj = {
                    "MonthId": 0,
                    "KaizenStatus": 4
                };
                
                kaizanCountService.getSuggestion(obj).then(function (data) {
                    $scope.suggestionList = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
   
            
            function clickEdit(data) {
            $scope.Nsug_SuggestionId = data.Id;
            $scope.Nsug_SuggestionNo = data.SuggestionNo;
            var Date = data.Date;
            $scope.Nsug_Month = $filter('date')(Date, 'MMM dd yyyy');
            $scope.Nsug_Proposer = data.Proposers;
            $scope.Nsug_KaizenStatus = data.KaizenStatus;
            $scope.Nsug_Suggestion = data.Suggestion;
            $scope.Nsug_Comment = data.Comment;
   }
    function edit(data) {
        
        $scope.suggestionVariables = {
                    Id: $scope.Nsug_SuggestionId,
                    SuggestionNo: $scope.Nsug_SuggestionNo,
                    Date: $scope.Nsug_Month,
                    ProposerId: 1,
                    KaizenStatusId: 4,
                    Suggestion: $scope.Nsug_Suggestion ,
                    Comment: $scope.Nsug_Comment 
                };
                kaizanCountService.updateSuggestion(angular.toJson($scope.suggestionVariables)).then(function (data) {
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                    getSuggestion();
                });
    }

        }]);
})(angular);