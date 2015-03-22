(function(angular) {
    angular.module('marineControllers').factory('autocompleteFactory', [
        'commonDataService','departmentService',
        function (commonDataService,departmentService) {
             return {  
                 departmentAutocomplete: function (callback) {
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
                                departmentService.getDepartment({
                                    query: request.term,                                   
                                    dataType: 'json'
                                }, function (data) {
                                    response($.map(data,
                                        function (item) {
                                            return {
                                                  label: item.boat_name,
                                                value1: item.boat_id
                                            };
                                        }));
                                });
                            }
                        }
                    };
                },
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
                }
            
            
            };
    
        }]);

})(angular);