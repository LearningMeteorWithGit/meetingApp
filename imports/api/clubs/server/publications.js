import { Meteor } from 'meteor/meteor';
import { Clubs } from '../clubs';

Meteor.publish("clubs.public", function(){
  return Clubs.find({"public":true});

});


Meteor.publish("clubs.private", function listsPrivate(){
  // if (!this.userId) {
  //    return this.ready();
  //  }
  let isPrivate = !this.userId ? true : false;
  return Clubs.find({public: isPrivate});
});
