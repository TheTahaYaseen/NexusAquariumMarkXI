let myApp = angular.module('MyAngularApp', ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'Views/Home.html' })
        .when('/gallery', { templateUrl: 'Views/Gallery.html' })
        .when('/events', { templateUrl: 'Views/Events.html' })
        .when('/contact', { templateUrl: 'Views/Contact.html' })
        .when('/booking', { templateUrl: 'Views/Booking.html' })
        .when('/birthdays', { templateUrl: 'Views/Events-Birthdays.html' })
        .when('/weddings', { templateUrl: 'Views/Events-Weddings.html' })
        .otherwise({ redirectTo: '/home' });

}]);