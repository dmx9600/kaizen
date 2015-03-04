(function(angular) {
    angular.module('marineControllers').factory('confirmationFactory', [
        '$rootScope',
        function ($rootScope) {           
            
            
            
        var self = this;

        $rootScope.$on('CONFIRMED_YES', function () {
            try {
                if (typeof self.callback === "function")
                    self.callback(self.data);
            }finally {
                self.callback = null;
                self.data = null;
            }
        });

        $rootScope.$on('CONFIRMED_NO', function () {
            self.callback = null;
            self.data = null;
        });
        
        return {
            showConfirmation: function (callback, data, modalInfo) {
                self.callback = callback;
                self.data = data;
                var modal = $('#confirmation-modal');
                if (modalInfo) {
                    if (modalInfo.message)
                        modal.find('.modal-body span').text(modalInfo.message);
                    if (modalInfo.title)
                        modal.find('.modal-title').text(modalInfo.title);
                }
                modal.modal();
            }
        };
    }]);
})(angular, jQuery);