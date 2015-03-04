(function (angular) {
    angular.module('marineControllers').controller("SuggestionController", ['$scope', '$http', '$routeParams', '$filter',
        function ($scope, $http, $routeParams, $filter) {
            $scope.navBarItems = ["Dashboard", "Portol", "Suggestion"];
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
                {title: 'Add New Suggestion', template: "employee", active: false},
                {title: 'Suggestion Status', template: "device", active: false},
                {title: 'Suggestion Approval', template: "boat", active: false}

            ];

            //Add New Suggestion Variables
            $scope.Nsug_SuggestionNo = "";
            $scope.Nsug_Month = [];
            $scope.Nsug_Proposer = [];
            $scope.Nsug_KaizenStatus = [];
            $scope.Nsug_Suggestion = "";
            $scope.Nsug_Comment = "";







        }]);
})(angular);