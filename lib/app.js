(function() {
	var app = angular.module("menagerieApp", ["ngRoute"]);

app.config(function($routeProvider) {
		
	$routeProvider.when("/dog", {
		templateUrl: "dog.html"
	});
	
	$routeProvider.when("/cat", {
		templateUrl: "cat.html"
	});
	
	$routeProvider.when("/catdog", {
		templateUrl: "catdog.html"
	});
	
	$routeProvider.otherwise({
		template: "My Marvelous Magnificent Menagerie is on the way..."
	});
});
	
		
})();