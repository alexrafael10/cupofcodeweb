
var app = angular.module('MainApp', ['ngRoute']);

app.controller('mainController',function($scope, $http, $route, $routeParams)
{
  $scope.pressed = 'web';
  $scope.mailData = {};
  $scope.sendMail = function()
  {
    if($scope.mailData.message && $scope.mailData.user)
    {
      $http.post('/mail', $scope.mailData)
              .success(function(data)
              {
                  $scope.mailData = {};
                   Materialize.toast('Mail Enviado!', 3000, 'rounded');
              })
              .error(function(data) {
                  Materialize.toast('Error de Mail', 3000, 'rounded');
              });
    }
    else
    {
        Materialize.toast('Error de Mail', 3000, 'rounded');
    }


}

});
