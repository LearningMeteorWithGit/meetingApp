import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages';

Meteor.publish("messages", function(argument){
  return Messages.find({"chatroomId": argument});
});
