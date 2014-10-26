angular.module('metro.services', ['ngResource'])

    .factory('FeedService', function ($resource) {
        return $resource('/api/feeds');
    });