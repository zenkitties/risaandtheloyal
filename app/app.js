(function(angular) {
    "use strict";

var loyalApp = angular.module('loyal',['ui.router']);
    
loyalApp.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
    
        // HOME STATES AND NESTED VIEWS ===================
    
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html'
        })
    
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/views/contact.html'
        })
    
});
    
    
})(window.angular);