import './memberContent.html'
import { Clubs } from '../../../api/clubs/clubs';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating';

import '../../components/functional/newClub';


Template.memberContent.onCreated(function(){
  this.state = new ReactiveDict();
  this.subscribe('privateClubs');
})

Template.memberContent.helpers({
  clubs(){
    return Clubs.find();
  },
  wantNewGroup(){
    const template = Template.instance();
    return template.state.get('wantNewGroup');
  }
});

Template.memberContent.events({
  "click .memberContent_addNewGroup": function(event, template){
    template.state.set('wantNewGroup', true);
  }
});
