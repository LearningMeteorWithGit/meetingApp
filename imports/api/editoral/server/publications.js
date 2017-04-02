// /* eslint-disable prefer-arrow-callback */
// import { Meteor } from 'meteor/meteor';
import { Articles } from '../articles';

Meteor.publish('articles.all', function(){
  return Articles.find().fetch();
});
