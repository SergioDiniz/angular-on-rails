var app = angular.module('customers', ['ngRoute', 'templates']);

app.config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller: "CustomerSearchController",
    templateUrl: "customer_search.html"
  });

  // end
}]);

app.controller("CustomerSearchController", ["$scope", "$http", function($scope, $http){
  $scope.customers = [];

  $scope.page = 0;

  $scope.search = function(searchTerm){

    if (searchTerm.length < 3) {
      return;
    }

    $scope.searchedFor = searchTerm;
    $http.get("/customers.json", {"params": {"keywords": searchTerm, "page": $scope.page}})
     .then(function(response){
             $scope.customers = response.data;
           },
           function(response){
             alert("There was a problem: " + response.status);
           });
  }

  $scope.previousPage = function(){
    if ($scope.page > 0){
      $scope.page = $scope.page - 1;
      $scope.search($scope.keywords);
    }
  }

  $scope.nextPage = function(){
    $scope.page = $scope.page + 1;
    $scope.search($scope.keywords);
  }

  // end
}]);
