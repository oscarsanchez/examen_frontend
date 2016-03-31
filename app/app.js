var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'stpa.modal',
    'ui.bootstrap','AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('main');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'}
					)
				.state('profile', {
						url: '/profile',
						templateUrl: '/views/profile.html',
						controller: 'ProfileController'}
					)
					.state('main', {
					url: '/main',
					templateUrl: '/main.html',
					controller: 'MainController'}
					)
}])
