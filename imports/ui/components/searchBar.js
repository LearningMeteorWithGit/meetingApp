// Import necessary js Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Clubs } from '../../api/clubs/clubs.js';
import { Session } from 'meteor/session';
// Import the corresponding html file
import './searchBar.html'


Template.searchBar.events({
  'submit .searchBar__form'(event, instance) {
      // Prevent default browser form submit
    event.preventDefault();

    const target = event.target;
    const text = target.searchString.value;

    Session.set('searchString', text);
    FlowRouter.go('SearchResult');
  },
});
