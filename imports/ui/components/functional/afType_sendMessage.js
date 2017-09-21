import './afType_sendMessage.html';

// Import necessary js Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Messages } from '/imports/api/messages/messages.js';

Template.afType_sendMessage.helpers({
  messagesCollection(){
    return Messages;
  }
});
