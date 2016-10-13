/* swWizard.js */

/* global confirm */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* imports used in this module*/
import {_swWizard} from ./_swWizard.js

template.swWizard.onCreated(function () {
	self = this;
	self.autorun(function () {
		new SimpleSchema({
			name: {type: String},
		}).validate(Template.currentData());		
	});
	self.wizard = new _swWizard(self.name);
});
