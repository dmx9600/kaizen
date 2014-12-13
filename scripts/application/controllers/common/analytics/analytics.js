(function(angular) {
    angular.module('marineControllers').controller("AnalyticsController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter','$modal',
        function($scope, $http, $routeParams, dashboardService, $filter,$modal) {

            $scope.togelWrapperclass = "active";
            $scope.togelWrapper = function() {
                if ($scope.togelWrapperclass == "active") {
                    $scope.togelWrapperclass = "inactive";
                } else {
                    $scope.togelWrapperclass = "active";
                }
               // $scope.$apply();

            };
            $scope.navBarItems = ["Dashboard", "Reports", "Analytics"];




$scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
    //  $log.info('Modal dismissed at: ' + new Date());
    });
  };


        }]);
})(angular);