// Import necessary js Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import the corresponding html file
import './searchBar.html'


Template.searchBar.events({
  'submit .searchBar__form': function searchBarForm(event) {
      // Prevent default browser form submit
    event.preventDefault();

    //TODO:  Try to output searchString
    const target = event.target;
    const text = target.searchString.value;

    FlowRouter.go('SearchResult');
  },
});
