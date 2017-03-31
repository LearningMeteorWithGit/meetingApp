import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './searchResultPage.html'

import '../../components/functional/newClub';

Template.searchResultPage.helpers({
  clubs(){
    return Session.get('searchResult');
  },
});
