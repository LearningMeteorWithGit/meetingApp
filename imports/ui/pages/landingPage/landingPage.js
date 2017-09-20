import { Meteor } from 'meteor/meteor';

import { Articles } from '../../../api/editorial/articles';
import { Clubs } from '../../../api/clubs/clubs';
import { ReactiveDict } from 'meteor/reactive-dict';

import './landingPage.html';
import '../../components/navigation/search';

// Template.landingPage.onCreated = function(){
//   Meteor.subscribe("articles");
//   // TODO Change to regional/most acitve or somethingelse
//   //Meteor.subscribe("clubs.public");
//
// };

Template.landingPage.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  this.autorun(() => {
    this.subscribe('articles');
    this.subscribe('clubs.private');
  });

});

Template.landingPage.helpers({
  articles() {
    return Articles.find({});
  },

  clubs(){
    // TODO Needs better request
    return Clubs.find({"public": false});

  }

});
