

angular.module('feedMeApp').controller('MainCtrl',function($scope, allPosts) {

  allPosts.getPosts().success(function(data) {
    $scope.posts = data;
    console.log(data);
  });
});
