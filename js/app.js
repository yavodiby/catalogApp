var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeCtrl",
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoCtrl',
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});