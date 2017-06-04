import './memberContent.html'
import { Clubs } from '../../../api/clubs/clubs';
import { ReactiveDict } from 'meteor/reactive-dict';


Template.memberContent.onCreated(function(){
  this.state = new ReactiveDict();
  this.subscribe('clubs');
})

Template.memberContent.helpers({
  clubs(){
    return Clubs.find();
  }
});
