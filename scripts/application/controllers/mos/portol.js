(function (angular) {
    angular.module('marineControllers').controller("PortolController", ['$scope', '$http', '$routeParams',
        '$filter', '$modal','kaizanCountService','departmentService','autocompleteFactory','utilityFactory','$state','$location',
        function ($scope, $http, $routeParams, $filter, $modal ,kaizanCountService,departmentService,autocompleteFactory,utilityFactory,$state,$location) {

            $scope.togelWrapperclass = "active";
            $scope.clickedTab = 1;
            $scope.month = [];
            $scope.kaizanCountGrid =[];
            $scope.monthData = {
                        Id: 0,
                        Name: ""
                    };
            
           $scope.navBarItems = [{title:'Dashboard',url:'dashboard'}, {title:'Portol',url:'portol/newKaizan'}, {title:'Suggestion',url:'suggestion/newSuggestion'}];
            
            
            $scope.tabs = [
                {title: 'Add New Kaizan', template: "newKaizan", active: false},
                  {title: 'Add  Kaizan Count', template: "kaizanCount", active: false},
                {title: 'Kaizan Approval', template: "kaizanApproval", active: false}
              
            ];
          
            $scope.clickTab = function (data) {
                $state.transitionTo(data);
            };
            
                 function activeTab() {
                 var count = 0;
                angular.forEach($scope.tabs, function(tab) {
                    
                    var path1 = $location.path();
                    var path2 = '/portol/'+tab.template;
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

            $scope.togelWrapper = function () {
                if ($scope.togelWrapperclass == "active") {
                    $scope.togelWrapperclass = "inactive";
                } else {
                    $scope.togelWrapperclass = "active";
                }
            };

                      
             
            $scope.monthAutoComplete = autocompleteFactory.monthAutoComplete(function (current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.monthData = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });
            


        }]);
})(angular);