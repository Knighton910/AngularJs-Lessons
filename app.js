
angular.module('myApp', [])
.controller('MyCtrl', function($scope) {
      var person = {
          firstName: "Mr",
          lastName: "Robot",
          imgSrc: "http://i.ytimg.com/vi/nJNZF3LR0VM/maxresdefault.jpg"
      };

    $scope.message = " Yo, Kel";
      $scope.person = person;
});



