import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Clubs } from '../../api/clubs/clubs';

import './searchResultPage.html';
Template.searchResultPage.helpers({
  clubs(){
    // TODO: Implement SearchCluster or stuff based on searchString
    console.log(Session.get('searchString'));

    return Clubs.find({});

  },
});

Template.searchResultPage.helpers({
});
