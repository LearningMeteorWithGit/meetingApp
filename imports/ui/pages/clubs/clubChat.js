import './clubChat.html'

import { Clubs } from '../../../api/clubs/clubs';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.clubChat.onCreated(function() {
  this.state = new ReactiveDict();
  this.getChatroomId = () => FlowRouter.getParam('_id');
  this.autorun(() => {
    this.subscribe('club.chatroom', {chatroomId: this.getChatroomId()});
  });
})


Template.clubChat.helpers({
  club(){
    const instance = Template.instance();
    const clubId = instance.getChatroomId();
    return Clubs.findOne(clubId);

  }
});
