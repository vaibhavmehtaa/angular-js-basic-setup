app.config(function($stateProvider, $urlRouterProvider, CONSTANTS) {
    $stateProvider
        .state('home', {
            controller: 'homeCtrl',
            url: "/home",
            templateUrl: "templates/home.html"

        })

    $urlRouterProvider.otherwise("/home")
})