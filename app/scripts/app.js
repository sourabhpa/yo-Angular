'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        url: '/home'
      })
      .state('addressbook', {
        templateUrl: 'views/addressbook.html',
        controller: 'AddressbookCtrl',
        url: '/addressbook'
      })
      .state('contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        url: '/contact'
      })
      .state('view', {
        templateUrl:'/views/view.html',
        url:'/view/:id',
        controller: 'AddressbookCtrl'
      })
  });
