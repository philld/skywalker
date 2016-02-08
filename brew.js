var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/about", {
			templateUrl: "partials/about.html",
		})
		.when("/stock", {
			templateUrl: "partials/stock.html",
		})
		.when("/brewery", {
			templateUrl: "partials/brewery.html"
		})
		.when("/recipe", {
			templateUrl: "partials/recipe.html"
		})
	.otherwise({
		redirectTo: "/about"
	});
});


myApp.controller("HeaderCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.page = "brew.co.nf";
	$scope.appDetails.navb1 = "stock";
	$scope.appDetails.navb2 = "recipe";
	$scope.appDetails.navb3 ="brewery";
	$scope.appDetails.dropdown = "settings";
	$scope.appDetails.dd1 = "preferences";
	$scope.appDetails.dd2 = "email";
	$scope.appDetails.dd3 = "about me";
	$scope.appDetails.dd4 ="logout";
	$scope.appDetails.dd5 ="";
	$scope.appDetails.ddhead ="system";
});
	
	
myApp.controller("JumboCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.header = "Welcome to brew.co.nf";
	$scope.appDetails.tagline =  "brew.co.nf is everything your brewing business needs to succeed, whether a small homebrewer or multinational brew.co.nf will help you run your brewery with all the tools you need to succeed.";
	$scope.appDetails.button = "Learn More >>";
});

myApp.controller("ContCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.head1 = "Brew Stock";
	$scope.appDetails.head2 = "Recipe Builder";
	$scope.appDetails.head3 = "Customer Stories";
	$scope.appDetails.body1 =  "Keep track of brewing stock, be notified when low on core ingredients, easily see which recipes can be made with current stock.";
	$scope.appDetails.body2 =  "Build recipes, use our recipe database or create your own, see what recipes you can build with current brew stock or place orders for missing stock items";
	$scope.appDetails.body3 =  "Our customers love brew.co.nf, read some of their stories and find out how brew.co.nf can help your brewing company grow.";
	$scope.appDetails.button1 = "Learn More >>";
	$scope.appDetails.button2 = "Learn More >>";
	$scope.appDetails.button3 = "Learn More >>";
});

