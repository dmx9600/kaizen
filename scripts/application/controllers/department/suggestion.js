(function (angular) {
    angular.module('marineControllers').controller("SuggestionController", ['$scope', '$http', '$routeParams', '$filter','$location','$state',
        function ($scope, $http, $routeParams, $filter,$location,$state) {
            $scope.navBarItems = [{title:'Dashboard',url:'dashboard'}, {title:'Portol',url:'portol/newKaizan'}, {title:'Suggestion',url:'suggestion/newSuggestion'}];
            $scope.togelWrapperclass = "active";
            $scope.clickedTab = 1;
            $scope.isupdate = false;

            $scope.togelWrapper = function () {
                if ($scope.togelWrapperclass == "active") {
                    $scope.togelWrapperclass = "inactive";
                } else {
                    $scope.togelWrapperclass = "active";
                }
            };

            $scope.tabs = [
                {title: 'Add New Suggestion', template: "newSuggestion", active: false},
                {title: 'Suggestion Status', template: "suggestionStatus", active: false},
                {title: 'Suggestion Approval', template: "suggestionApproval", active: false}

            ];
            
              $scope.clickTab = function (data) {
                $state.transitionTo(data);
            };
            
                function activeTab() {
                 var count = 0;
                angular.forEach($scope.tabs, function(tab) {
                    
                    var path1 = $location.path();
                    var path2 = '/suggestion/'+tab.template;
                    if (path1 === path2){
                        $scope.tabs[count].active = true;
                    }else{
                         $scope.tabs[count].active = false;
                    }
                     count++;
                });
                  if (!$scope.$$phase)
                    $scope.$apply();
             };
             
            activeTab();

            //Add New Suggestion Variables
            $scope.Nsug_SuggestionNo = "";
            $scope.Nsug_Month = [];
            $scope.Nsug_Proposer = [];
            $scope.Nsug_KaizenStatus = [];
            $scope.Nsug_Suggestion = "";
            $scope.Nsug_Comment = "";







        }]);
})(angular);