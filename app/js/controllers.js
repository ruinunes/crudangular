var appControllers = angular.module('appControllers',['appServices']);

appControllers.controller('controllerPeople', ['$scope', '$location', 'People', function($scope, $location, People){

  $scope.people = People.getCollection();

  $scope.delete = function(_id) {
    People.removeItem({id:_id}).$promise.then(

        function( value ){//success
          $location.path('/');
        },

        function( error ) {//error
          console.log(error);
        }

      );
  };

}]);



appControllers.controller('controllerDetails', ['$scope', '$routeParams', 'People', function($scope, $routeParams, People){
  $scope.person = People.get({id:$routeParams.id});
}]);

appControllers.controller('controllerEditPerson', ['$scope', '$routeParams', '$location', 'People', function($scope, $routeParams, $location, People){
  $scope.person = People.get({id:$routeParams.id});

  $scope.cancel = function() {
    $location.path('/');
  }

  $scope.submitForm = function(isValid) {
    $scope.submitted = true;
    if(isValid){

      People.updateItem({id:$scope.person.id.toString()}, $scope.person).$promise.then(

          function( value ){//success
            $location.path('/');
          },

          function( error ) {//error
            console.log(error);
          }

      );

    } else {
      console.log('editing: form is not valid.');
    }

  };
}]);


appControllers.controller('controllerAddPerson', ['$scope', '$location', 'People',  function($scope, $location, People){

  $scope.cancel = function() {
    $location.path('/');
  }

  $scope.submitForm = function(isValid) {
    console.log('submited the form.');
      $scope.submitted = true;

      if(isValid) {

        People.addItem($scope.person).$promise.then(

          function( value ){//success
            $location.path('/people');
          },

          function( error ) {//error
            console.log(error);
          }

      );
    } else {
      console.log('adding: form is not valid.');
    }
  };

}]);
