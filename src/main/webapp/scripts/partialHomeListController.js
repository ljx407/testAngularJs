myApp.filter('testFilter',function(){
	return function(input){
		console.info(input);
		return input + "!";
	}
});

myApp.controller("partialHomeListController",['$scope',function($scope){
	$scope.testNub = 7 ; // 测试ng-if
	$scope.dogs = [ 'Bernese', 'Husky', 'Goldendoodle1' ]; // 测试filter
	$scope.defaultDogs = [{'id':'1','text':'Bernese'},{'id':'2','text':'Husky'},{'id':'3','text':'Goldendoodle'}];
	$scope.mySelectDog = '1' ;
	
	$scope.init = function() {
		console.info("defaultDogs",$scope.defaultDogs);
	};
	
	$scope.init();
}]);

