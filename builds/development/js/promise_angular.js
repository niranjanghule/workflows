angular.module("myApp",[])
.service("task", function($http,$q,$rootScope)){
	
	task = this;
	task.getAllTasks = function(){
		var defer = $q.defer();
		$http.get("url")
		.success(function(res){
			defer.resolve(res);
		})
		.error(funtion(err,status){
			defer.reject(err);
		})

		return defer.promise;
	}

	return task;
});

===========================================================

angular.module("myApp",[])
.controller("taskCtrl", function( $scope, task )){
	

		$scope.init = function(){
			$scope.getAll();
		}

		$scope.getAll = function(){

			task.getAllTasks()
			.then( function(resp){
				//success
			}),function(){
				//error
			} )

		}
});