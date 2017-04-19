import { Meteor } from 'meteor/meteor';

import { Articles } from '../../../api/editorial/articles';
import { ReactiveDict } from 'meteor/reactive-dict';

import './landingPage.html';
import '../../components/navigation/searchBar';

// Template.landingPage.onCreated = function(){
//   Meteor.subscribe("articles");
//   // TODO Change to regional/most acitve or somethingelse
//   //Meteor.subscribe("clubs.public");
//
// };

Template.landingPage.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  this.subscribe('articles');
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



// Template.body.helpers({
//   tasks() {
//     const instance = Template.instance();
//     if (instance.state.get('hideCompleted')) {
//       // If hide completed is checked, filter tasks
//       return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
//     }
//     // Otherwise, return all of the tasks
//     return Tasks.find({}, { sort: { createdAt: -1 } });
//   },
//   incompleteCount() {
//     return Tasks.find({checked: { $ne: true }}).count();
//   }
// });
