myApp.controller('contentController', function($scope) {
    $scope.lancer = function(){
        $scope.deA = Math.floor( (Math.random() * 6) +1) ;
        $scope.deB = Math.floor( (Math.random() * 6) +1) ;
    };
});