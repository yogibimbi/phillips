angular.module('App')

.controller('AppCtrl', function($scope) {

})

.directive('weekPicker', function ( $compile ) {
	return {
		scope: true,
		link: function (scope, element, attrs ) {
			var el;

			attrs.$observe( 'html', function ( tpl ) {
				if ( tpl && angular.isDefined( tpl ) ) {
					// compile the provided template against the current scope
					el = $compile( tpl )(scope );
					// stupid way of emptying the element
					element.html("");

					// add the template content
					element.append( el );
				}
			});
		}
	};
})
