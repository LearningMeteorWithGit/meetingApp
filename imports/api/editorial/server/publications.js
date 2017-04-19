// /* eslint-disable prefer-arrow-callback */
// import { Meteor } from 'meteor/meteor';
import { Articles } from '../articles';

Meteor.publish('articles', function(){
  return Articles.find();
});
