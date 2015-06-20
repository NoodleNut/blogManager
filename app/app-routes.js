app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'app/views/main/main-view.html',
        controller: 'MainController'
    })

});
