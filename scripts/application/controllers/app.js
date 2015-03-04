(function (angular, $) {
    var appRoot = angular.module('myApp', ['marineControllers', 'ngGrid', 'ui.autocomplete', 'google-maps'.ns(), 'ngRoute', 'ui.router',
        'ui.bootstrap.datetimepicker', 'ui.bootstrap', 'ngAnimate']);
    appRoot.config([
        '$routeProvider', '$locationProvider', '$stateProvider',
        function ($routeProvider, $locationProvider, $stateProvider) {

            var dashboard = {
            name: "dashboard",
            url: '/dashboard',
            templateUrl: 'views/common/dashboard/dashboard.html',
            controller: 'DashboardController'
            }, settings = {
             name: "settings",
            url: '/settings',
            templateUrl: 'views/admin/settings/settings.html',
            controller: 'SettingsController'
            }, settings = {
             name: "settings",
            url: '/settings',
            templateUrl: 'views/admin/settings/settings.html',
            controller: 'SettingsController'
            }, settings = {
             name: "settings",
            url: '/settings',
            templateUrl: 'views/admin/settings/settings.html',
            controller: 'SettingsController'
            }, analytics = {
             name: "analytics",
            url: '/analytics',
            templateUrl: 'views/common/analytics/analytics.html',
            controller: 'AnalyticsController'
            }, reports = {
             name: "reports",
            url: '/reports',
            templateUrl: 'views/common/reports/reports.html',
            controller: 'ReportsController'
            },help = {
             name: "help",
            url: '/help',
            templateUrl: 'views/common/help/help.html',
            controller: 'HelpController'
            },profile = {
             name: "profile",
            url: '/profile',
            templateUrl: 'views/admin/profile/profile.html',
            controller: 'ProfileController'
            },portol = {
             name: "portol",
            url: '/portol',
            templateUrl: 'views/common/portol/portol.html',
            controller: 'PortolController'
            },suggestion = {
             name: "suggestion",
            url: '/suggestion',
            templateUrl: 'views/common/suggestion/suggestion.html',
            controller: 'SuggestionController'
            },department = {
             name: "department",
            url: '/department',
            templateUrl: 'views/ref/department/department.html',
            controller: 'DepartmentController'
            }, login = {
             name: "login",
            url: '/login',
            templateUrl: 'views/admin/login.html',
            controller: 'LoginController'
            };

            $stateProvider.state(dashboard);
            $stateProvider.state(login);
            $stateProvider.state(analytics);
            $stateProvider.state(reports);
            $stateProvider.state(suggestion);
            $stateProvider.state(settings);
            $stateProvider.state(help);
            $stateProvider.state(portol);
            $stateProvider.state(profile);
            $stateProvider.state(department);



        }]).run(['$rootScope', '$state', '$stateParams', 'ajaxService', '$location',
        function ($rootScope, $state, $stateParams, ajaxServic, $location) {
            $.blockUI.defaults.css.border = '1px solid #CCCCCC';
            $(document).ajaxStart(function () {
                $.blockUI({
                    message: '<h3 style="color:#555555;"><img src="images/ajax-loader.gif" style="margin-right:15px;" />Just a moment.</h3>',
                    overlayCSS: {
                        opacity: 0
                    },
                    fadeIn: 300,
                    baseZ: 9999999,
                    css: {
                        backgroundColor: '#EEEEEE',
                        borderRadius: '4px',
                        width: '15%',
                        minWidth: '300px',
                        left: '40%',
                        padding: '10px 0 15px',
                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'
                    }
                });

                timer = setTimeout(function () {
                    if (timer)
                        clearTimeout(timer);
                    $.unblockUI();
                }, 2000);
            });

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $state.transitionTo('login');

        }]);
})(angular, jQuery);
