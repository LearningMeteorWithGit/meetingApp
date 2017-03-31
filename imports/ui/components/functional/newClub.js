// Import necessary js Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Clubs } from '../../../api/clubs/clubs';

import './newClub.html';

Template.newClub.helpers({
  clubCollection(){
    return Clubs;
  },
});
