import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../../api/clubs/clubs';

import './searchResultPage.html'

import '../../components/functional/newClub';

Template.searchResultPage.onCreated = function(){

this.getSearchResult = () => Session.get('searchString');
  this.autorun(() => {
    this.subscribe('clubs.byName', this.getSearchResult());
  });
};

Template.searchResultPage.helpers({
  clubs(){
    return Clubs.find({}).fetch();

  },
});
