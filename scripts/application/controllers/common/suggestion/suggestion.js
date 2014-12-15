(function (angular) {
    angular.module('marineControllers').controller("SuggestionController", ['$scope', '$http', '$routeParams', 'dashboardService', '$filter',
        function ($scope, $http, $routeParams, dashboardService, $filter) {


            $scope.navBarItems = ["Dashboard", "Portol", "Suggestion"];
            $scope.togelWrapperclass = "active";
            $scope.clickedTab = 1;
            $scope.isupdate = false;

            $scope.togelWrapper = function () {
                if ($scope.togelWrapperclass == "active") {
                    $scope.togelWrapperclass = "inactive";
                } else {
                    $scope.togelWrapperclass = "active";
                }
            };

            $scope.clickTeb = function (data) {
                $scope.clickedTab = data;

            };

            //Add New Suggestion Variables
            $scope.Nsug_SuggestionNo = "";
            $scope.Nsug_Month = [];
            $scope.Nsug_Proposer = [];
            $scope.Nsug_KaizenStatus = [];
            $scope.Nsug_Suggestion = "";
            $scope.Nsug_Comment = "";

            //Add New Suggestion  Methods 
            $scope.getSuggestion = function (data) {
                getSuggestion();
            };

            $scope.addSuggestion = function (data) {
                addSuggestion();
            };

            $scope.clickEditSuggestion = function (data) {
                clickEditSuggestion(data);
            };

            $scope.editSuggestion = function (data) {
                editSuggestion(data);
            };

            $scope.clearSuggestion = function (data) {
                clearSuggestion();
            };

            $scope.deleteSuggestion = function (Id) {
                deleteSuggestion(Id);
            };

            function deleteSuggestion(DepId) {
                var dep = {
                    Id: DepId
                };
                departmentService.deleteSuggestion(angular.toJson(dep)).then(function (data) {
                    var val = data;
                    clearSuggestion();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }

            function clickEditSuggestion(data) {
                $scope.isupdate = true
                $scope.Dep_Id = data.Id;
                $scope.Dep_Name = data.SuggestionName;
            }

            function editSuggestion(data) {

                if (isEmptySuggestionObject()) {
                    $scope.depValidation = true;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    $scope.departmentVariables = {
                        SuggestionName: $scope.Dep_Name,
                        ModifyDate: new Date(),
                        ModifyUserId: 1
                    };

                    var obj = {
                        department: $scope.departmentVariables,
                        Id: $scope.Dep_Id
                    };

                    departmentService.updateSuggestion(angular.toJson(obj)).then(function (data) {
                        var val = data;
                        clearSuggestion();
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    });


                }

            }

            function clearSuggestion() {
                $scope.isupdate = false;
                $scope.Nsug_SuggestionNo = "";
                $scope.Nsug_Month.length = 0;
                $scope.Nsug_Proposer.length = 0;
                $scope.Nsug_KaizenStatus.length = 0;
                $scope.Nsug_Suggestion = "";
                $scope.Nsug_Comment = "";
                  if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                
            }

            function addSuggestion() {

                if (isEmptySuggestionObject()) {
                    $scope.depValidation = true;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                } else {
                    $scope.departmentVariables = {
                        SuggestionName: $scope.Dep_Name,
                        StatusId: 1,
                        CreateDate: new Date(),
                        CreateUserId: 1,
                        ModifyDate: new Date(),
                        ModifyUserId: 1
                    };
                    departmentService.insertSuggestion(angular.toJson($scope.departmentVariables)).then(function (data) {
                        var dep = data;
                        clearSuggestion();
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    });
                }

            }

            function isEmptySuggestionObject() {
                if (isEmpty($scope.Dep_Name)) {
                    return true;
                } else {
                    return false;
                }
            }

            function getSuggestion() {
                departmentService.getSuggestion().then(function (data) {
                    $scope.department = data;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }



            function getProposerDropDown() {
                departmentService.getDepartment().then(function (data) {
                    $scope.departmentDropDown = data;
                    $scope.departmentes = $scope.departmentDropDown[1];
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }
            
            function getKaizenStatusDropDown() {
                departmentService.getDepartment().then(function (data) {
                    $scope.departmentDropDown = data;
                    $scope.departmentes = $scope.departmentDropDown[1];
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
            }





        }]);
})(angular);