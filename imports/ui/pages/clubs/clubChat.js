import './clubChat.html'

import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Clubs } from '../../../api/clubs/clubs';
import { Messages } from '../../../api/messages/messages';

import '../../components/functional/afType_sendMessage';


Template.clubChat.onCreated(function() {
  this.state = new ReactiveDict();
  this.getChatroomId = () => FlowRouter.getParam('_id');
  this.autorun(() => {
    this.subscribe('club.chatroom', {chatroomId: this.getChatroomId()});
    this.subscribe('messages', {chatroomId: this.getChatroomId()});
  });
})


Template.clubChat.helpers({
  club(){
    const instance = Template.instance();
    const clubId = instance.getChatroomId();
    return Clubs.findOne(clubId);
  },
  messages(){
    const instance = Template.instance();
    const clubId = instance.getChatroomId();
    return Messages.find({"chatroomId":instance.getChatroomId()});

  },
  messagesCollection(){
    return Messages;
  }
});

// Template.clubChat.events({
//   'submit .clubChat__input'(event){
//     event.preventDefault();
//     const target = event.target;
//     const text = target.message_Bar.value;
//
//     console.log(text);
//
//   }
// });
