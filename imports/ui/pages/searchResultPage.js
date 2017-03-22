import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Clubs } from '../../api/clubs/clubs';

import './searchResultPage.html';

Template.searchResultPage.helpers({
  clubs(){
    return Session.get('searchResult');
  },
  clubCollection(){
    return Clubs;
  }
});

Template.searchResultPage.helpers({
});
