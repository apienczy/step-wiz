/* global confirm */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* used in this template */

Template.swStep.onCreated(function () {
	const self = this;

	self.autorun(function () {
		// Validate data
		new SimpleSchema({
			title: {type: String},
			condition: {type: Boolean, optional: true}
		}).validate(Template.currentData());		
	});

	self.dataSet = new ReactiveDict();
	self.dataSet.setDefault({
		stepClass: null;
	});
	if (!_.isUndefined(Template.parentData().wizard)) {
		self.dataSet.set('stepClass', Template.parentData().wizard.addBlankStep());
	} else {
		console.log('Undefined wizard, parent data:', Template.parentData());
	};
});

Template.swStep.onRendered(function () {
	const self = this;
	console.log('This :', this, '\nCurrent Data :', Template.currentData);
});

Template.swStep.helpers({
	swStepClass() {
		const instance = Template.instance();
		return STEP_CLASS_PREFIX + self.dataSet.get('stepClass');
	}
});