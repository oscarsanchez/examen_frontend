angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    	$scope.title = "Tabla de Usuarios."
      $scope.users = [];
      $scope.user = {};


      $scope.getUsers = function(){
        HomeService.GetUsers().then(function(response){
          $scope.users = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postUser = function(){
        var user = {name: $scope.user.name,
                    username: $scope.user.username,
                    password:  $scope.user.password,
                    telephone:  $scope.user.telephone,
                    status : $scope.user.status,
                    scope: $scope.user.scope};
        HomeService.PostUser(user).then(function(response){
          alert("Posted to /users");
          $scope.getUsers();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }



      $scope.updateUser = function(item){
        $scope.user=item;
        HomeService.UpdateUser($scope.user,item._id).then(function(response){
          alert("Update from /users");
          $scope.getUsers();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.deleteUser = function(item){
        $scope.user=item;
        HomeService.DeleteUser($scope.user,item._id).then(function(response){
          alert("Delete from /users");
          $scope.getUsers();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


      $scope.undeleteUser = function(item){
        $scope.user=item;
        HomeService.UndeleteUser($scope.user,item._id).then(function(response){
          alert("Enable from /users");
          $scope.getUsers();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope == "admin";
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope == "regular";
      }

      $scope.isNanny = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope == "nanny";
      }

  }]);
