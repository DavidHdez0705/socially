import { Meteor } from 'meteor/meteor';
import { Parties } from '../imports/api/parties';

Meteor.startup(() =>{
	if (Parties.find().count() === 0) {
		
		const parties = [{
			'name': 'Dubstep-Free Zone',
			'description': 'Can we please just for an evening not listen to dubstep'
		}, {
			'name': 'All dubstep all the time',
      		'description': 'Get it on!'
    	}, {
      	'name': 'Savage lounging',
      	'description': 'Leisure suit required. And only fiercest manners.'
		}];

		parties.forEach((party) => {
			Parties.insert(party)
		});
	}

	Email.setting = {
			region: 'us-west-2',
			accessKeyId: "",
			secretAccessKey: ""
	};
	
})