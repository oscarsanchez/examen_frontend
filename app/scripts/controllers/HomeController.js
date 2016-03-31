angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    	$scope.title = "Tabla de Propuestas de Trabajo."
      $scope.jobs = [];
      $scope.job = {};


      $scope.getJobs = function(){
        HomeService.GetJobs().then(function(response){
          $scope.jobs = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postJob = function(){
        var job = {title : $scope.job.title,
         description : $scope.job.description,
         position : $scope.job.position,
         info : $scope.job.info,
         salary : $scope.job.salary,
         cdate : $scope.job.cdate,
         status : $scope.job.status};
        HomeService.PostJob(job).then(function(response){
          alert("Posted to /jobs");
          $scope.getJobs();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }



      $scope.updateJob = function(item){
        $scope.job=item;
        HomeService.UpdateJob($scope.job,item._id).then(function(response){
          alert("Update from /jobs");
          $scope.getJobs();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.deleteJob = function(item){
        $scope.job=item;
        HomeService.DeleteJob($scope.job,item._id).then(function(response){
          alert("Delete from /jobs");
          $scope.getJobs();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


      $scope.undeleteJob = function(item){
        $scope.job=item;
        HomeService.UndeleteJob($scope.job,item._id).then(function(response){
          alert("Enable from /jobs");
          $scope.getJobs();
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



  }]);
