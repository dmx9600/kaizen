(function(angular) {
    angular.module('marineControllers').controller("HelpController", ['$scope', '$http', '$routeParams',  '$filter',
        function($scope, $http, $routeParams, $filter) {           


           
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});


        }]);
})(angular);