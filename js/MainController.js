var app = angular.module('myapp',[]);

app.controller('myCtrl',
	['$scope',
		function($scope){
			$scope.log_Chore = function (chore){
				alert(chore);
			};
			$scope.log_Attribute = "This is attribute"
		}
]);

app.directive('kid',function() {
			return {
				restrict: "E",
				scope: {
					finish: "&",
					done: "@",
					//test_variable : "@",
				},
				link: function(scope) {
					scope.logChore = function(data) {
						scope.finish()(data);
					};
				},
				templateUrl: 'customDc.html'
			};
			
});

// app.directive('kid2',function() {
			// return {
				// restrict: "E",
				// scope: {
					// done: "@",
				// },
				// templateUrl: 'customDc1.html'
			// };
			
 // });


