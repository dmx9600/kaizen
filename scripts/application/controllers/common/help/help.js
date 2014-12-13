(function(angular) {
    angular.module('marineControllers').controller("HelpController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter',
        function($scope, $http, $routeParams, dashboardService, $filter) {           


           
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});


        }]);
})(angular);