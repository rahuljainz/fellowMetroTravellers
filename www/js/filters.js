angular.module('metro.filters', [])
.filter('feedsFilter', function(){
	return function(feeds, key){
		if (!angular.isUndefined(feeds) && !angular.isUndefined(key) && key.length > 0) {
	        var tempFeeds = [];
	        key = key.toLowerCase();
	        angular.forEach(feeds, function (feed) {
	            var str = feed.location + ' ' + feed.problem + ' ' + feed.description;
	            if (str.toLowerCase().indexOf(key) > -1) {
	                tempFeeds.push(feed);
	            }
	        });
	        return tempFeeds;
	    } else {
	        return feeds;
	    }
	};
});