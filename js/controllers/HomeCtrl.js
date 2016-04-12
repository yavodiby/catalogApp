app.controller('HomeCtrl', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
});