(function(angular) {
    angular.module('marineControllers').factory('autocompleteFactory', [
        'commonDataService',
        function (commonDataService) {
             return {  
              monthAutoComplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                var data = commonDataService.months;
                                response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.name,
                                                value1: item.id
                                            };
                                        }));

                            }
                        }
                    };
                }};
    
        }]);

})(angular);