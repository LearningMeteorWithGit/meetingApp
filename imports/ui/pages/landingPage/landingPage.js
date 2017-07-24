import { Meteor } from 'meteor/meteor';

import { Articles } from '../../../api/editorial/articles';
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
  this.subscribe('articles');
  console.log("-----------------TEST: ");
});

Template.landingPage.helpers({
  articles() {

//    return Articles.find();
    return Articles.find({});

  }
  // articleCollection(){
  //   return Articles;
  // }
});
