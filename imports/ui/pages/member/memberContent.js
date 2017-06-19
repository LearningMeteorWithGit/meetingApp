import './memberContent.html'
import { Clubs } from '../../../api/clubs/clubs';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating';

import '../../components/functional/newClub';


Template.memberContent.onCreated(function(){
  this.state = new ReactiveDict();
  this.state.setDefault('createNewGroup', false);
  this.autorun(() => {
    this.subscribe('clubs.private');
  });
})

Template.memberContent.helpers({
  clubs(){
    return Clubs.find({public : false});
  },
  createNewGroup(){
    const template = Template.instance();
    return template.state.get('createNewGroup');
  }
});

Template.memberContent.events({
  'click .memberContent_addNewGroup': function(event, template){
    if(template.state.get('createNewGroup')){
      template.state.set('createNewGroup', false);
    }else {
      template.state.set('createNewGroup', true);
    }
  }
});
