import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../../api/clubs/clubs';
import { ReactiveDict } from 'meteor/reactive-dict';

import './searchResultPage.html'

import '../../components/functional/newClub';

Template.searchResultPage.onCreated(function OnCreated() {
  //this.subscribe('clubs.byName');
  this.subscribe('clubs.public');
  this.state = new ReactiveDict();

});

  Template.searchResultPage.helpers({
    clubs() {
      return Clubs.find();
    },

});
