var app = angular.module('myapp',[]);

app.controller('myCtrl',
	['$scope',
		function($scope){
			$scope.logChore = function (chore){
				alert(chore);
			};
		}
]);

app.directive('kid',function() {
			return {
				restrict: "E",
				scope: {
					done: "&"
				},
				link: function(scope) {
					scope.logChore = function(data) {
						scope.done()(data);
					};
				},
				templateUrl: 'customDc.html'
			};
			
});


