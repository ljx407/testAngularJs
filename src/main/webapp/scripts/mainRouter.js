var myApp = angular.module("myApp", [ 'ui.router' ]);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url : '/home',
		templateUrl : 'views/partial-home.html'
	}).state('home.list', {
		url : '/list',
		templateUrl : 'views/partial-home-list.html',
		controller : 'partialHomeListController'
	}).state('home.paragraph', {
		url : '/paragraph',
		template : 'I could sure use a drink right now.'
	}).state('about', {
		url : '/about',
		views : {
			'' : {
				templateUrl : 'views/partial-about.html'
			},
			'columnOne@about' : {
				template : 'Look I am a column!'
			},
			'columnTwo@about' : {
				templateUrl : 'views/table-data.html',
				controller : 'scotchController'
			}
		}
	}).state('testSelect',{
		url : '/testSelect',
		templateUrl : 'views/test-select.html',
		controller : 'testSelectController'
	})
	.state('testModal',{
		url : '/testModal',
		templateUrl : 'views/testmodal/test-modal.html',
		controller : 'testModalController'
	});

});
