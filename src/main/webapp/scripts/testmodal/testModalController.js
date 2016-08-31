myApp.controller('testModalController', function($scope,$modal) {
	$scope.title = "hello modal";
	$scope.contacts = [{'id':'1','name':'1','surname':'11','address':'111','phone':'1111'},{'id':'2','name':'2','surname':'22','address':'222','phone':'2222'}]

    $scope.open = function (contactId) {
        var modalInstance = $modal.open({
            templateUrl: 'views/testmodal/testModalDetail.html',
            controller: 'testModalDetailController',
            resolve: {
                contact: function () {
                    return $scope.contact;
                }
            }
        });
	}
});