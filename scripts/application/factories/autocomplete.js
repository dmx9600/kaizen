(function(angular) {
    angular.module('marineControllers').factory('autocompleteFactory', [
        'commonDataService','departmentService','userService','kaizanCountService',
        function (commonDataService,departmentService,userService,kaizanCountService) {
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
                                                label: item.DepartmentName,
                                                value1: item.Id
                                            };
                                        }));
                                });
                            }
                        }
                    };
                },   statusbyModuleAutocomplete: function (callback) {
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
                                kaizanCountService.statusbyModule({
                                    query: request.term,  
                                    data:kaizanCountService.moduleStatusId,
                                    dataType: 'json'
                                }, function (data) {
                                    response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.Name,
                                                value1: item.StatusId
                                            };
                                        }));
                                });
                            }
                        }
                    };
                }, proposerAutocomplete: function (callback) {
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
                                userService.getAllUser({
                                    query: request.term,                                   
                                    dataType: 'json'
                                }, function (data) {
                                    response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.EMPName,
                                                value1: item.UserId
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
                }, yearAutoComplete: function (callback) {
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
                                var data = commonDataService.year;
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