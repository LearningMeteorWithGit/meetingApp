import { Meteor } from 'meteor/meteor';
import { Nachrichten } from '../nachrichten';

Meteor.publish("messages", function(argument){
  return Nachrichten.find({"chatroomId": argument});
});
