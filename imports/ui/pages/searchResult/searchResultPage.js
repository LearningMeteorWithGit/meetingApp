import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../../api/clubs/clubs';

import './searchResultPage.html'

import '../../components/functional/newClub';

Template.searchResultPage.onCreated = function(){
  const handle = Meteor.subscribe('clubs.public');
};

Template.searchResultPage.helpers({
  clubs(){
    return Session.get('searchResult');
  },
});
