import { Meteor } from 'meteor/meteor';
import { Clubs } from '../clubs';
// TODO Reinclude Meteor.publish and make things safe again!
Meteor.publish('clubs.public', function listPublicClubs() {
  return Clubs.find().fetch();
});
