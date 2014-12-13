var appRoot = angular.module('myApp', ['marineControllers', 'ngRoute', 'google-maps'.ns(),'ui.bootstrap.datetimepicker','ui.bootstrap']);

appRoot.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        appRoot.value('failedRequest', {requests: []});



        var dashboard = {
            templateUrl: 'views/common/dashboard/dashboard.html',
            controller: 'DashboardController'
        };    

        var analytics = {
            templateUrl: 'views/common/analytics/analytics.html',
            controller: 'AnalyticsController'
        };

        var reports = {
            templateUrl: 'views/common/reports/reports.html',
            controller: 'ReportsController'
        };

        var settings = {
            templateUrl: 'views/admin/settings/settings.html',
            controller: 'SettingsController'
        };

        var help = {
            templateUrl: 'views/common/help/help.html',
            controller: 'HelpController'
        };

        var profile = {
            templateUrl: 'views/admin/profile/profile.html',
            controller: 'ProfileController'
        };


        var login = {
            templateUrl: 'views/admin/login.html',
            controller: 'LoginController'
        };
        
          var portol = {
            templateUrl: 'views/common/portol/portol.html',
            controller: 'PortolController'
        };
        
          var suggestion = {
            templateUrl: 'views/common/suggestion/suggestion.html',
            controller: 'SuggestionController'
        };
        
        


        $routeProvider.when('/dashboard', dashboard)
                .when('/login', login)                
                .when('/analytics', analytics)
                .when('/reports', reports)
                .when('/suggestion', suggestion)
                .when('/settings', settings)
                .when('/help', help)
                .when('/portol', portol)
                .when('/profile', profile)
                .otherwise({redirectTo: '/dashboard'});
//$routeProvider.otherwise({redirectTo :'/list'});
//.when('/details/:itemId',details)


    }]);