'use strict';

/**
 * @ngdoc overview
 * @name jsappApp
 * @description
 * # jsappApp
 *
 * Main module of the application.
 */
angular
  .module('PageAboutUsApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/components/home/homeView.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'modules/components/about/aboutView.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
