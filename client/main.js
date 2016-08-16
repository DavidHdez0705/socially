import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {name as Socially } from '../imports/ui/components/socially/socially';






// NOTES

//.controller('PartiesListCtrl', [$scope, function($scope){

// Without Component Directive
/*.controller('PartiesListCtrl', function($scope, $reactive){
	'ngInject';

	$reactive(this).attach($scope);

	this.helpers({
		parties() {
			return Parties.find({});
		}
	})

});
*/

//}]);

// With components
/*
.component('partiesList', {
	templateUrl: 'client/partiesList.html',
	controllerAs: 'partiesList',
	controller($scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);

		this.helpers({
			parties() {
				return Parties.find({});
			}
		});
	}
});*/