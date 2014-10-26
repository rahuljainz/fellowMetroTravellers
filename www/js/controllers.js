angular.module('metro.controllers', [])
.controller('FeedCreationController', function ($scope, $ionicNavBarDelegate, FeedService){
	$scope.feed = {};
	$scope.locations = [{"id":"1", "name":"Uttam nagar West"},
	{"id":"2", "name":"Uttam nagar East"},
	{"id":"3", "name":"Janakpuri West"},
	{"id":"4", "name":"Janakpuri East"}];
	$scope.problems = ["Heavy rush", "Metro halted", "Long checking line"];
	$scope.SubmitFeed = function() {
		if( angular.isUndefined($scope.feed.location) || angular.isUndefined($scope.feed.problem) ) {
			// Can not submit
			return;
		}
		FeedService.save($scope.feed, function(){
			$ionicNavBarDelegate.back();
		});
	};
})
.controller('FeedListController', function($scope, $state, FeedService){
	$scope.searchKey = "";

    $scope.clearSearch = function () {
        $scope.searchKey = "";
        $scope.feeds = FeedService.query();
    }

    $scope.search = function (str) {
        $scope.feeds = FeedService.query({name: str});
    }

    $scope.doRefresh = function() {
	    $scope.feeds = FeedService.query({name: $scope.searchKey}, function(){
	    	// Stop the ion-refresher from spinning
	       $scope.$broadcast('scroll.refreshComplete');
	    });
	};

	$scope.newFeed = function() {
		$state.transitionTo('feed_form');
	};

    $scope.feeds = FeedService.query();
});