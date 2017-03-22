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

// TODO Make use of these two variables when a decent search engine is present.
    // const target = event.target;
    // const text = target.searchString.value;

    const searchResult = Clubs.find({}).fetch();
    Session.set("searchResult", searchResult);

    FlowRouter.go('SearchResult');
  },
});
