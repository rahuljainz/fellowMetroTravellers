// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('metro', ['ionic', 'metro.controllers', 'metro.services', 'metro.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('feed_form', {
          url: '/new',
          templateUrl: 'templates/feed_form.html',
          controller: 'FeedCreationController'
      })
      .state('feed_list', {
          url: '/list',
          templateUrl: 'templates/feed_list.html',
          controller: 'FeedListController'
      });

  $urlRouterProvider.otherwise('list');

});