(function(angular) {
    angular.module('marineControllers').controller("ProfileController", ['$scope', '$http', '$routeParams',  '$filter',
        function($scope, $http, $routeParams, $filter) {

            $scope.sort = {
                sortingOrder: 'id',
                reverse: false
            };
            $scope.gap = 5;
            $scope.filteredItems = [];
            $scope.groupedItems = [];
            $scope.itemsPerPage = 10;
            $scope.pagedItems = [];
            $scope.currentPage = 0;
            $scope.getfocus = true;
            loadFishingBoatsDetails();
//            function loadFishingBoatsDetails() {
//                dashboardService.fishingBoatsDetails().then(function(data) {
//                    $scope.ishingBoatsDetailsList = data;
//                    $scope.searchTable();
//                    $scope.$apply();
//
//                });
//            }
//            ;



            $scope.getfocusTableHead = function() {
                $scope.getfocus = false;
                $scope.$apply();
            };

            $scope.getblurTableHead = function() {
                $scope.getfocus = true;
                //  $scope.$apply();
            };


            ///Paging
            $scope.sort = {
                sortingOrder: 'id',
                reverse: false
            };
            $scope.gap = 5;
            $scope.filteredItems = [];
            $scope.groupedItems = [];
            $scope.itemsPerPage = 10;
            $scope.pagedItems = [];
            $scope.currentPage = 0;

            $scope.sidebarTogel = function() {
                $scope.boolChangeClass = !$scope.boolChangeClass;
                $scope.$apply();
            };

            $scope.togelFishingBoatsStatus = function() {
                $scope.boolFishingBoatsStatusChangeClass = !$scope.boolFishingBoatsStatusChangeClass;
                $scope.$apply();
            };

            $scope.togelFishingBoatsTable = function() {
                $scope.boolFishingBoatsChangeClass = !$scope.boolFishingBoatsChangeClass;
                $scope.$apply();
            };


            $scope.togelNotification = function() {
                $scope.boolNotificationChangeClass = !$scope.boolNotificationChangeClass;
                $scope.$apply();
            };


            var searchMatch = function(haystack, needle) {
                if (!needle) {
                    return true;
                }
                return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
            };

            // init the filtered items
            $scope.searchTable = function() {
                $scope.filteredItems = $filter('filter')($scope.ishingBoatsDetailsList, function(item) {
                    for (var attr in item) {
                        if (searchMatch(item[attr], $scope.query))
                            return true;
                    }
                    return false;
                });
                // take care of the sorting order
                if ($scope.sort.sortingOrder !== '') {
                    $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
                }
                $scope.currentPage = 0;
                // now group by pages
                $scope.groupToPages();
            };

            // calculate page in place
            $scope.groupToPages = function() {
                $scope.pagedItems = [];
                for (var i = 0; i < $scope.filteredItems.length; i++) {
                    if (i % $scope.itemsPerPage === 0) {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
                    } else {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                    }
                }
            };

            $scope.range = function(size, start, end) {
                var ret = [];

                // console.log(size, start, end);

                if (size < end) {
                    end = size;
                    start = size - $scope.gap;
                }
                for (var i = start; i < end; i++) {


                    if (i >= 0) {
                        ret.push(i);
                    }

                }
                //  console.log(ret);
                return ret;
            };

            $scope.prevPage = function() {
                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
            };

            $scope.nextPage = function() {
                if ($scope.currentPage < $scope.pagedItems.length - 1) {
                    $scope.currentPage++;
                }
            };

            $scope.setPage = function() {
                $scope.currentPage = this.n;
            };
            //Paging and Sorting end





        }]);
})(angular);