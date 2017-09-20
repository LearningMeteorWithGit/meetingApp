import './talkBar.html';

// Import necessary js Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Nachrichten } from '../../../api/nachrichten/nachrichten';

Template.talkBar.helpers({
  nachrichtenCollection(){
    return Nachrichten;
  }
});
