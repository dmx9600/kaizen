(function(angular) {
    angular.module('main').directive('mapSearchpopup', function($compile, $http, $templateCache, $controller, $q, ajaxService, modalPopupService) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, ngModel) {
                element.click(function() {
                    var requestFirst = ajaxService.get('/views/common/popup/mapPopup.html', {cache: $templateCache}),
                            requestSecond = ajaxService.get('views/common/help/help.html', {cache: $templateCache});
                    $q.all([requestFirst, requestSecond]).then(function(responses) {
                        var templateScope = scope.$new();
                        var container = $('body #search-modal-container-mini');
                        if (container.length === 0) {
                            container = $(responses[0]);
                            container.find('.modal-title').text('Season Search');
                            $('body').append(container);
                        }
                        var body = container.find('.modal-body');
                        templateScope.closeSearchPopup = function() {
                            $('body #search-modal-container-mini').modal('hide');
                        };
                        var templateCtrl = $controller('HelpController', {$scope: templateScope});
                        body.html(responses[1]);
                        body.children().data('$ngControllerController', templateCtrl);
                        $compile(body.contents())(templateScope);
                        $('#search-modal-container-mini').modal();
                    });
                });
            }
        };
    });
})(angular);