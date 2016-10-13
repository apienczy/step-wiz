/* module _swWizard.js */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

// Import jquery steps
import '../../plugins/steps/jquery.steps.min.js';
import '../../plugins/steps/jquery.steps.css';

export class _swWizard {
	constructor(name) {
		check(name, String);
		this._id = Random.id;
		this.name = name;
		this.steps = new Array();
	},

	addStep(step) {
		return this.steps.push(step);
	},

	addBlankStep() {
		return this.steps.push(step);
	},

	replaceStep(index, step) {
		check(index, Number);
		if (index < this.steps.length()) {
			this.steps[index] = step;
			return true;
		} else {
			console.log('Step index out of range');
			return false;
		};
	}
};
