//import { Meteor } from 'meteor/meteor';
import { Clubs } from '../clubs';


Meteor.publish("privateClubs", function(){
  return Clubs.find({"public":false});

});
