(function (angular) {
    angular.module('marineControllers').controller("PortolController", ['$scope', '$http', '$routeParams',
        '$filter', '$modal','kaizanCountService','departmentService','autocompleteFactory','utilityFactory',
        function ($scope, $http, $routeParams, $filter, $modal ,kaizanCountService,departmentService,autocompleteFactory,utilityFactory) {

            $scope.togelWrapperclass = "active";
            $scope.clickedTab = 1;
            $scope.month = [];
            $scope.kaizanCountGrid =[];
            $scope.monthData = {
                        Id: 0,
                        Name: ""
                    };
            
            $scope.navBarItems = ["Dashboard", "Portol", "Suggestion"];
            
            
            $scope.tabs = [
                {title: 'Add New Kaizan', template: "employee", active: false},
                  {title: 'Add  Kaizan Count', template: "device", active: false},
                {title: 'Kaizan Approval', template: "boat", active: false}
              
            ];

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