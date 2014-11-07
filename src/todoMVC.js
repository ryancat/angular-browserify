angular
.module('turn/todomvc', ['todomvcTemplate'])
.value('todomvcOptions', {

	// ...
	
})
.directive('todomvc', function () {

	return {
		restrict: '',
		scope: {

			// ...
			
		},
		templateUrl: 'todoMVC.html',
		link: function (scope, element) {

			angular.extend(scope, {

				// ...

			});

			// teardown
			scope.$on('$destroy', function(){});

		}
	};

});