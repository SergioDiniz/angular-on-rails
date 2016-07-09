var app = angular.module('customers', []);

app.controller("CustomerSearchController", ["$scope", function($scope){
  $scope.customers = [];
  $scope.search = function(searchTerm){
    $scope.searchedFor = searchTerm;

    $scope.customers = [
      {
        "first_name": "Sergio",
        "last_name": "Diniz",
        "email": "sergio@gmail.com",
        "username": "sergiodz",
        "created_at": "10/04/2016"
      },
      {
        "first_name": "Bel",
        "last_name": "Silva",
        "email": "bell@gmail.com",
        "username": "bell",
        "created_at": "11/04/2016"
      },
      {
        "first_name": "Lu",
        "last_name": "Gadelha",
        "email": "lu@gmail.com",
        "username": "lulu",
        "created_at": "13/04/2016"
      }
    ]
  }
}]);
