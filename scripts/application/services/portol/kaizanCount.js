(function (angular) {
    angular.module('marineControllers').service('kaizanCountService', function (ajaxService) {
        var self = this;
        self.moduleStatusId = 0;
        
          self.getAllKiazanCout = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/KiazanCout',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
           self.getAllKaizen = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/getAllKaizen',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        
        
            self.insertKiazan = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/KiazanInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
          self.insertKiazanCout = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/KiazanCoutInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
         self.insertBenefits = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/BenefitsInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        self.approvalKaizen = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/KaizenApproval',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
         self.insertSuggestion = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/SuggestionInsert',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        self.updateSuggestion = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/SuggestionUpdate',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
         self.approvalSuggestion = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost:8080/kiazanmsservice/SuggestionApproval',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
          self.getSuggestion = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/Suggestion?MonthId='+data.MonthId+'&$KaizenStatus='+data.$KaizenStatus,
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
         self.suggestionMaxId = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/SuggestionMaxId',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
         self.kaizenMaxId = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost:8080/kiazanmsservice/KaizenMaxId',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
         self.statusbyModule = function (data, callback) {
            return ajaxService.get({
                 url: 'http://localhost:8080/kiazanmsservice/StatusbyModule?ModuleId='+data.data,
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
       
        
        
        
        
        
        
    });
})(angular);
