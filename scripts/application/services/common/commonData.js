(function (angular) {
    angular.module('marineControllers').service('commonDataService', function (ajaxService) {
        var self = this;


        self.months = [
            {
                "id": "1",
                "name": "January"

            },
            {
                "id": "2",
                "name": "February"

            }, {
                "id": "3",
                "name": "March"

            }, {
                "id": "4",
                "name": "April"

            }, {
                "id": "5",
                "name": "May"

            }, {
                "id": "6",
                "name": "June"

            }, {
                "id": "7",
                "name": "July"

            }, {
                "id": "8",
                "name": "August"

            }, {
                "id": "9",
                "name": "September"

            }, {
                "id": "10",
                "name": "October"

            }, {
                "id": "11",
                "name": "November"

            }, {
                "id": "12",
                "name": "December"
            }];
        
        
        self.year = [
            {
                "id": "1",
                "name": "2014"

            },
            {
                "id": "2",
                "name": "2015"

            }, {
                "id": "3",
                "name": "2016"

            }, {
                "id": "4",
                "name": "2017"

            }, {
                "id": "5",
                "name": "2018"

            }, {
                "id": "6",
                "name": "2019"

            }];




    });
})(angular);