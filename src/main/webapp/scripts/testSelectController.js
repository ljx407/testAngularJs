myApp.controller('testSelectController', function($scope) {
	$scope.title = "hello select";
	
	// 1. 必须要设订select的ng-model属性，否则select无法正常显示值
	// 2. 绑定的mycity，若需要默认选中必须要为字符串，若为数值无法正确选中默认值（不知道为什么）
    $scope.mycity = '1'; 
    $scope.Cities = [{ id: '1', name: '北京' }, { id: '2', name: '上海' }, { id: '3', name: '广州' }];

});