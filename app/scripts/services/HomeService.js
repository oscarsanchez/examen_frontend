angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://oscarsanchez-backend.herokuapp.com/';
		return {
				GetUsers: function(){
					return $http.get(baseUrl + "v1/users");
				},
				PostUser: function(payload){
					return $http.post(baseUrl + "v1/users", payload);
				},
				UpdateUser: function(payload,id){
					return $http.put(baseUrl + "v1/users/"+id, payload);
				},
				UndeleteUser: function(payload,id){
					return $http.delete(baseUrl + "v1/user/"+id, payload);
				},
				DeleteUser: function(payload,id){
					return $http.delete(baseUrl + "v1/users/"+id, payload);
				},
				GetJobs: function(){
					return $http.get(baseUrl + "v1/jobs");
				},
				PostJob: function(payload){
					return $http.post(baseUrl + "v1/jobs", payload);
				},
				UpdateJob: function(payload,id){
					return $http.put(baseUrl + "v1/jobs/"+id, payload);
				},
				UndeleteJob: function(payload,id){
					return $http.delete(baseUrl + "v1/job/"+id, payload);
				},
				DeleteJob: function(payload,id){
					return $http.delete(baseUrl + "v1/jobs/"+id, payload);
				}
	    };
}]);
