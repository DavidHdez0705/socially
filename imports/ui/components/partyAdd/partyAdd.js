import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './partyAdd.html';
import { Parties } from '../../../api/parties';

class PartyAdd {
	constructor() {
		this.party = {};
	}

	submit() {
		//console.log('submit', this.party);
		Parties.insert(this.party);
		this.reset();
	}

	reset() {
		this.party = {};
	}
	// Send email
	// if (Meteor.isServer) {
	sendEmail() {	

		var mailOptions ={
			from: '',
			to: 'dhernandez@jelp.io',
			subject: 'Hello',
			text: 'Hello world',
			html: '<b>Test</b>'
		}

		Email.send(mailOptions);
	}
}

const name = 'partyAdd';

// Create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs: name,
	controller: PartyAdd
});