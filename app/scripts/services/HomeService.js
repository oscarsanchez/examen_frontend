angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
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
				}
	    };
}]);
