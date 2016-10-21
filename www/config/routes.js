app.config(function($stateProvider, $urlRouterProvider, CONSTANTS) {
    $stateProvider
        .state('home', {
            controller: 'mainCtrl',
            url: "/home",
            templateUrl: CONSTANTS + "home.html"

        })

    $urlRouterProvider.otherwise("/home")
})