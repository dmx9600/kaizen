(function(angular) {
    angular.module('marineControllers').factory('utilityFactory', function () {
        return {
            isDirty: function(initialData, currentdata) {
                return !angular.equals(initialData, currentdata);
            }
        };
    });
})(angular);