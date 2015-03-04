(function (angular) {
    angular.module('marineControllers').controller("DashboardController", ['$scope', '$http', '$routeParams', '$filter',
        function ($scope, $http, $routeParams, $filter) {

            $scope.dateTimeNow = new Date();
            $scope.togelWrapperclass = "active";
            $scope.togelWrapper = function () {
                if ($scope.togelWrapperclass == "active") {
                    $scope.togelWrapperclass = "inactive";
                } else {
                    $scope.togelWrapperclass = "active";
                }
            };

            $scope.kiazanStatusDate = $scope.dateTimeNow;
            $scope.departmentKiazanDate = $scope.dateTimeNow;



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

            $scope.navBarItems = ["Dashboard", "Portol", "Suggestion"];




            $scope.getfocus = true;
            $scope.ishingBoatsDetailsList = [];
          //  loadFishingBoatsDetails(null);

            $scope.getfocusTableHead = function () {
                $scope.getfocus = false;
                $scope.$apply();
            };

            $scope.getblurTableHead = function () {
                $scope.getfocus = true;
                //  $scope.$apply();
            };

       


            $scope.$watch('departmentKiazanDate', function () {
                var month = $filter('date')($scope.departmentKiazanDate, 'M');   
               loadFishingBoatsDetails(month);
            });




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

            $scope.sidebarTogel = function () {
                $scope.boolChangeClass = !$scope.boolChangeClass;
                $scope.$apply();
            };

            $scope.togelFishingBoatsStatus = function () {
                $scope.boolFishingBoatsStatusChangeClass = !$scope.boolFishingBoatsStatusChangeClass;
                $scope.$apply();
            };

            $scope.togelFishingBoatsTable = function () {
                $scope.boolFishingBoatsChangeClass = !$scope.boolFishingBoatsChangeClass;
                $scope.$apply();
            };

            $scope.togelNotification = function () {
                $scope.boolNotificationChangeClass = !$scope.boolNotificationChangeClass;
                $scope.$apply();
            };

            var searchMatch = function (haystack, needle) {
                if (!needle) {
                    return true;
                }
                return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
            };

            // init the filtered items
            $scope.searchTable = function () {
                $scope.filteredItems = $filter('filter')($scope.ishingBoatsDetailsList, function (item) {
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
            $scope.groupToPages = function () {
                $scope.pagedItems = [];
                for (var i = 0; i < $scope.filteredItems.length; i++) {
                    if (i % $scope.itemsPerPage === 0) {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
                    } else {
                        $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                    }
                }
            };

            $scope.range = function (size, start, end) {
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

            $scope.prevPage = function () {
                if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                }
            };

            $scope.nextPage = function () {
                if ($scope.currentPage < $scope.pagedItems.length - 1) {
                    $scope.currentPage++;
                }
            };

            $scope.setPage = function () {
                $scope.currentPage = this.n;
            };


            //Paging and Sorting end
            var graphDataNike = [
                {value: 35, label: 'Previous Month'},
                {value: 65, label: 'Current Month'}
            ];

            var graphDataIt = [
                {value: 80, label: 'Previous Month'},
                {value: 20, label: 'Current Month'}
            ];

            $scope.GraphsDeptData = graphDataIt;
            $scope.clickDepartmentGraphs = function (data) {
                if (data.label == "Nike") {
                    $scope.GraphsDeptData = graphDataNike;
                    $scope.$apply();
                } else {
                    $scope.GraphsDeptData = graphDataIt;
                    $scope.$apply();
                }
            };

            //Graphs 
            Morris.Donut({
                element: 'graph1',
                data: [
                    {value: 9.42, label: 'Knitting'},
                    {value: 11.92, label: 'Dyeing '},
                    {value: 3.02, label: 'Sewing'},
                    {value: 2.79, label: 'RM Stores'},
                    {value: 2.50, label: 'FG Stores'},
                    {value: 23.60, label: 'QA'},
                    {value: 7.85, label: 'Development'},
                    {value: 3.31, label: 'Maintenance'},
                    {value: 5.99, label: 'HR 01'},
                    {value: 6.57, label: 'MOS'},
                    {value: 8.60, label: 'IE'},
                    {value: 5.00, label: 'Marketing'},
                    {value: 0.70, label: 'IT'},
                    {value: 2.33, label: 'Planning'},
                    {value: 0.81, label: 'Commercial'},
                    {value: 3.78, label: 'Finance'},
                    {value: 1.80, label: 'Purchasing'}
                ],
                formatter: function (x) {
                    return x + "%";
                }
            }).on('click', function (i, row) {
                console.log(i, row);
                $scope.clickDepartmentGraphs(row);
            });

            Morris.Donut({
                element: 'graph2',
                data: [
                    {value: 85, label: 'Safety'},
                    {value: 5, label: 'Quality'},
                    {value: 5, label: 'Delivery'},
                    {value: 5, label: 'Cost'},
                    {value: 5, label: 'Morale'},
                    {value: 5, label: 'Environment'},
                    {value: 5, label: '6S'},
                    {value: 5, label: 'Productivity'}
                ], colors: [
                    '#DBA901',
                    '#F5ECCE',
                    '#F3E2A9',
                    '#F5DA81',
                    '#F7D358',
                    '#FACC2E',
                    '#FFBF00',
                    '#F7F2E0'

                ],
                formatter: function (x) {
                    return x + "%"
                }
            }).on('click', function (i, row) {
                console.log(i, row);

            });

            Morris.Donut({
                element: 'graph3',
                data: [
                    {value: 60, label: 'Previous Month'},
                    {value: 30, label: 'Current Month'}

                ], colors: [
                    '#696969',
                    '#808080'
                ],
                formatter: function (x) {
                    return x + "%";
                }
            }).on('click', function (i, row) {
                console.log(i, row);
            });

            Morris.Donut({
                element: 'graph4',
                data: $scope.GraphsDeptData,
                colors: [
                    '#BDB76B',
                    '#F0E68C'
                ],
                formatter: function (x) {
                    return x + "%";
                }
            }).on('click', function (i, row) {
                console.log(i, row);
            });

        }]);
})(angular);