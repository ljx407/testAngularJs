myApp.controller('testModalDetailController',function($scope, $modalInstance, contact) {
    $scope.contact = contact;
    $scope.ok = function () {
        $modalInstance.close();
    };
});