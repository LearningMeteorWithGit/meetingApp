import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Messages = new Mongo.Collection("messages");
Schema = {};

Schema.Messages = new SimpleSchema ({
  chatroomId: {
    type: String,
    label: 'Club Id',
    autoform: {
      type: 'hidden'
    }
  },
  userName: {
    type: String,
    label: 'Name of sender',
    autoform: {
      type: 'hidden'
    }
  },
  content: {
    type: String,
    label: 'Send message'
  },
  sendTime: {
    type: Date,
    label: 'Send time',
    autoform: {
      type: 'hidden'
    },
    autoValue: function autoValueSendTime(){
      return new Date();
    }
  }
})

Messages.attachSchema(Schema.Messages);
