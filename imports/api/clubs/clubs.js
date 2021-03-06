import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Clubs = new Mongo.Collection('clubs');

Clubs.Schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Club name',
    max: 200,
  },
  description: {
    type: String,
    label: 'Description of your club',
    max: 1000,
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function autoValueCreatedAt() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    },
  },
  public: {
    type: Boolean,
    label: 'Public Club',
    defaultValue: false,
    autoform: {
      type: 'hidden'
    },
  },
  creator: {
    type: String,
    label: 'Creator of this group',
    autoValue: function thisUser() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    },
  },
}, {
  clean: {
    filter: true,
    autoConvert: true,
    removeEmptyStrings: true,
    trimStrings: true,
    getAutoValues: true,
    removeNullsFromArrays: true,
  },
});

Clubs.attachSchema(Clubs.Schema);
