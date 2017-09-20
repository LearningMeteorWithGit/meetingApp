import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Nachrichten = new Mongo.Collection("nachrichten");
Schema = {};

Schema.Nachrichten = new SimpleSchema ({
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
    label: 'The Message'
  },
  sendTime: {
    type: Date,
    label: 'Send time',
    autoValue: function autoValueSendTime(){
      return new Date();
    }
  }
})

Nachrichten.attachSchema(Schema.Nachrichten);
