// Import necessary js Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Clubs } from '../../../api/clubs/clubs';
import { Articles } from '../../../api/editorial/articles';

import { Session } from 'meteor/session';
// Import the corresponding html file
import './search.html';


// Template.searchBar.events({
//   'submit .searchBarForm'(event, instance) {
//       // Prevent default browser form submit
//     event.preventDefault();
//
//     const target = event.target;
//     const searchString = target.searchString.value;
//
//     Session.set("searchString", searchString);
//
//     FlowRouter.go('SearchResult');
//   },
// });

Template.search.onCreated( () => {
  let template = Template.instance();

  template.searchQuery = new ReactiveVar();
  template.searching   = new ReactiveVar( false );

  template.autorun( () => {
    template.subscribe( 'articles', template.searchQuery.get(), () => {
      setTimeout( () => {
        template.searching.set( false );
      }, 300 );
    });
  });
});

Template.search.events({
  'keyup [name="search"]' ( event, template ) {
    let value = event.target.value.trim();

    console.log("-----------------suchquery: " + value);

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});

Template.search.helpers({
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  },
  articles() {
    let articles = Articles.find();
    if ( articles ) {
      return articles;
    }
  }
});
